import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${SERVER_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div key={`${product.id}-${product.name}`}>
      <div>id: {product.id}</div>
      <div>name: {product.name}</div>
      <div>price: {product.price}</div>
      <div>year: {product.year}</div>
      <br />
    </div>
  );
}

export default Product;
