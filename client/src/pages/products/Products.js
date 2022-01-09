import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../../utils/api-client';

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiClient(`products`)
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    apiClient(`products/${id}`, { method: 'delete' })
      .then((data) => {
        const removeProducts = products.filter(
          (product) => product.id !== data.id
        );
        setProducts(removeProducts);
      })
      .catch((err) => {
        console.log('erroror', err);
      });
  };
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={`${product.id}-${product.name}`}>
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.year}</div>
            <button onClick={() => navigate(`/products/${product.id}/edit`)}>
              edit
            </button>
            <button onClick={() => handleDelete(product.id)}>delete</button>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
