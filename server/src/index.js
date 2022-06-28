const express = require('express');
const request = require('request'); 
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
    const id = req.query.id;
    const url = 'https://api.mojang.com/users/profiles/minecraft/' + id;
    request(url, (error, response, body) => { 
        if (!error && response.statusCode === 200) {
            res.send(body); 
        }
    }); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});