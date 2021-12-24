import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/products/${id}`, {
      method: 'delete',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const removeProducts = products.filter(
          (product) => product.id !== data.id
        );
        setProducts(removeProducts);
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