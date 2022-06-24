import React from 'react';
import { useState, useEffect } from 'react';

require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY;

function App(props) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      let uuid = await fetch(`/api`).then(response => response.json());
      // make sure to not publicly share the api key !!!
      let player = await fetch(`https://api.hypixel.net/player?uuid=${uuid.id}&key=${apiKey}`).then(response => response.json());
      setInfo(player.player.stats.Bedwars);
    }
    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <h1>Info</h1>
      <p>{info.kills_bedwars}</p>
    </div>
  );
}

export default App;
