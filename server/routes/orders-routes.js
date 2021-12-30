import express from 'express';
import { db } from '../db.js';

const router = express.Router();
const { orders } = db.data;

router.get('/orders/:id', function (req, res) {
  const id = parseInt(req.params.id);
  const data = orders.find((o) => o.id === id);
  if (data) {
    res.send(data);
  } else {
    res.send({ message: `id ${id} is not existed` });
  }
});

export default router;
