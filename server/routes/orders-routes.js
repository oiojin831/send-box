import express from 'express';
import { db } from '../db.js';

const router = express.Router();
const { orders, users, products } = db.data;

router.get('/orders', function (req, res) {
  const ordersWithNestedData = orders.map((o) => {
    const seller = users.find((u) => u.id === o.sellerId);
    const product = products.find((p) => p.id === o.productId);
    return {
      id: o.id,
      seller,
      product,
    };
  });
  res.send(ordersWithNestedData);
});

router.get('/orders/:id', function (req, res) {
  const id = parseInt(req.params.id);
  const order = orders.find((o) => o.id === id);
  if (order) {
    const seller = users.find((u) => u.id === order.sellerId);
    const product = products.find((p) => p.id === order.productId);
    res.send({
      id: order.id,
      seller,
      product,
    });
  } else {
    res.send({ message: `id ${id} is not existed` });
  }
});

export default router;
