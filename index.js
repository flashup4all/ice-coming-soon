const express = require('express');
const path = require('path');
var cors = require('cors')

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'assets')));
app.use(cors())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);