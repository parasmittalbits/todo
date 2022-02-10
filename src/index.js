const express = require('express');//pull in express

//set up api and running locally at local host 3000
const api = express();
api.listen(3000, () => {
  console.log('API up and running!');
});


api.get('/', (req, res) => {
    console.log(req);
    res.send('Hello, world!');
  });