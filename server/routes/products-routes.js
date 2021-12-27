import express from 'express';
import { db } from '../db.js';

const router = express.Router();
const { products } = db.data;

router.get('/products', function (req, res) {
  res.send(products);
});

router.get('/products/:id', function (req, res) {
  const id = parseInt(req.params.id);
  const data = products.find((p) => p.id === id);
  if (data) {
    res.send(data);
  } else {
    res.send({ message: `id ${id} is not existed` });
  }
});

router.post('/products', function (req, res) {
  const { name, price, year } = req.body;
  const id = Math.max(...products.map((p) => p.id)) + 1;
  const newProduct = {
    id,
    name,
    price,
    year,
  };
  products.push(newProduct);
  db.write();
  res.send({ id });
});

router.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, year } = req.body;
  const data = products.find((p) => p.id === id);
  if (data) {
    const idx = products.findIndex((p) => p.id === id);
    products[idx] = {
      id,
      name,
      price,
      year,
    };
    db.write();
    res.send({ id });
  } else {
    res.send({ message: `id ${id} is not existed` });
  }
});

router.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const data = products.find((p) => p.id === id);
  if (data) {
    const idx = products.findIndex((p) => p.id === id);
    products.splice(idx, 1);
    db.write();
    res.send({ id });
  } else {
    res.send({ message: `id ${id} is not existed` });
  }
});

export default router;
