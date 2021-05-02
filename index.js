const express = require('express');

const app = express();

//use the "public" domain
app.use('/public', express.static(__dirname + '/public'));

//send the html file for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/viewing/index.html');
});

//homepage, once again
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/viewing/index.html');
});

app.get('/poetry', (req, res) => {
  res.sendFile(__dirname + '/viewing/poetry.html');
});

app.listen(3000, () => {
  console.log('server started');
});