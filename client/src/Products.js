import { useState, useEffect } from 'react';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  });

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
