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
