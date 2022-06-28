import React from 'react';
import { useState, useEffect } from 'react';

require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY;

function ListItem(props) {  
  return <li>{props.value}</li>;  
}  

function App(props) {
  const [name, setName] = useState('oofSauce');
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      let uuid = await fetch(`/api?id=${name}`).then(response => response.json()).catch((error) => {
        console.log(error);
      });
      // make sure to not publicly share the api key !!!
      let player = await fetch(`https://api.hypixel.net/player?uuid=${uuid.id}&key=${apiKey}`).then(response => response.json());
      setInfo(player.player.stats.Bedwars);
    }
    fetchData().catch(console.error);
  }, [name]);

  const handleChange = (e) => {
    let user = e.target.value;
    setName(user);
  }

  const infokeys = Object.keys(info).map((key) => <ListItem key={key} value={key} />);

  return (
    <div>
      <input type="text" id="user-search" onChange={handleChange} label="Search user..."/>
      <h1>{info.coins}</h1>
      <ul>{infokeys}</ul>
    </div>
  );
}

export default App;
