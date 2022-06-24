const express = require('express');
const request = require('request'); 
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
    request('https://api.mojang.com/users/profiles/minecraft/oofSauce', (error, response, body) => { 
        if (!error && response.statusCode === 200) {
            res.send(body); 
        }
    }); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});