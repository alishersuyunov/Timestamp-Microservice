var express = require('express');
var app = express();
var html = "<html>fas</html>";
app.get('/', function (req, res) {
  res.send(html);
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});