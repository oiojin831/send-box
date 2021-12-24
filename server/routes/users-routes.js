import express from 'express';

const users = [
  {
    id: 1,
    nickname: 'oiojin831',
    name: 'eung jin lee',
    email: 'oiojin831@gmail.com',
  },
];

const router = express.Router();

router.post('/users', (req, res) => {
  const { nickname } = req.body;
  if (users.find((obj) => obj.nickname === nickname)) {
    const idx = users.findIndex((obj) => obj.nickname === nickname);
    res.send(users[idx]);
  } else {
    res.status(401).send({ message: 'no username' });
  }
});

router.post('/users/new', (req, res) => {
  const newUser = req.body;
  if (users.find((obj) => obj.nickname === newUser.nickname)) {
    res.status(401).send({ message: 'user already exists' });
  } else {
    const id = users.length;
    users.push({ ...newUser, id });
    res.send(users[id]);
  }
});

export default router;
