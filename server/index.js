import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { db } from './db.js';
import productRoute from './routes/products-routes.js';
import userRoute from './routes/users-routes.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(productRoute);
app.use(userRoute);

app.get('/', function (req, res) {
  res.send(db.data.products);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at ${process.env.SERVER_URL}`);
});
