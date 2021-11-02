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

function Product() {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={`${product.id}-${product.name}`}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.year}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Product;
