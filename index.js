const express = require('express');

const app = express();

//use the "public" domain
app.use('/public', express.static(__dirname + '/public'));

//send the html file for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/viewing/home.html');
});

//homepage, once again
app.get('/:name', (req, res) => {
  let name = req.params.name;
  res.sendFile(__dirname + '/viewing/' + name + '.html');
});

app.get('/poems/:name', (req, res) => {
  let title = req.params.name;
  res.sendFile(__dirname + '/viewing/poems/' + title + '.html');
});

app.listen(3000, () => {
  console.log('server started');
});