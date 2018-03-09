var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/'));

app.listen(process.env.port, error => {
  if (error) console.error(error);
  console.log('Server is up on port ' + process.env.port);
});
