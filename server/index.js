import express from 'express';
import cors from 'cors';
import productRoute from './routes/products-routes.js';
import userRoute from './routes/users-routes.js';

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
