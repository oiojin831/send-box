var express = require('express');
var app = express();
const PORT = 8080;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
