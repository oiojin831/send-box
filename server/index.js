const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/products-routes');
const userRoute = require('./routes/users-routes');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8081;

app.use(productRoute);
app.use(userRoute);

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
