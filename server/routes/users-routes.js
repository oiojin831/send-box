import express from 'express';
import { db } from '../db.js';

const router = express.Router();

const { users } = db.data;

router.post('/users', (req, res) => {
  const { nickname } = req.body;
  const data = users.find((u) => u.nickname === nickname);
  if (data) {
    const idx = users.findIndex((obj) => obj.nickname === nickname);
    res.send(users[idx]);
  } else {
    res.status(401).send({ message: 'no username' });
  }
});

router.get('/users/:id', function (req, res) {
  const id = parseInt(req.params.id);
  const data = users.find((o) => o.id === id);
  if (data) {
    res.send(data);
  } else {
    res.send({ message: `id ${id} is not existed` });
  }
});

router.post('/users/new', (req, res) => {
  const newUser = req.body;
  const data = users.find((u) => u.nickname === newUser.nickname);
  if (data) {
    res.status(401).send({ message: 'user already exists' });
  } else {
    const id = Math.max(...users.map((u) => u.id)) + 1;
    console.log(id);
    users.push({ ...newUser, id });
    db.write();
    res.send(users[users.length - 1]);
  }
});

export default router;
