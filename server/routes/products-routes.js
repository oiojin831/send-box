import express from 'express';
import { db } from '../db.js';

const { products } = db.data;
const router = express.Router();

router.get('/products', function (req, res) {
  res.send(products);
});

router.get('/products/:id', function (req, res) {
  const id = parseInt(req.params.id);
  if (products.find((obj) => obj.id === id)) {
    res.send(products.find((obj) => obj.id === id));
  } else {
    res.send({ message: `id ${id} is not existed` });
  }
});

router.post('/products', function (req, res) {
  const { name, price, year } = req.body;
  const id = products.length;
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
  if (products.find((obj) => obj.id === id)) {
    const idx = products.findIndex((obj) => obj.id === id);
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
  if (products.find((obj) => obj.id === id)) {
    const idx = products.findIndex((obj) => obj.id === id);
    products.splice(idx, 1);
    db.write();
    res.send({ id });
  } else {
    res.send({ message: `id ${id} is not existed` });
  }
});

export default router;
