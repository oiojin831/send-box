var express = require('express');
var app = express();
const PORT = 8080;

const products = [
  {
    name: 'diablo',
    price: 30000,
    year: 2002,
  },
];

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/products', function (req, res) {
  res.send(products);
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
