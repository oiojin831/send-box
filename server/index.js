import express from 'express';
import cors from 'cors';
import { db } from './db.js';
import productRoute from './routes/products-routes.js';
import userRoute from './routes/users-routes.js';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

app.use(productRoute);
app.use(userRoute);

app.get('/', function (req, res) {
  res.send(db.data.products);
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
