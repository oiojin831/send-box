import express from 'express';

const products = [
  {
    id: 1,
    name: 'diablo',
    price: 30000,
    year: 2002,
  },
  {
    id: 2,
    name: 'diablo2',
    price: 40000,
    year: 2002,
  },
  {
    id: 3,
    name: 'diablo3',
    price: 50000,
    year: 2002,
  },
];

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
    res.send({ id });
  } else {
    res.send({ message: `id ${id} is not existed` });
  }
});

export default router;
