import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewProduct() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    price: 0,
    year: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/products/', {
      method: 'POST',
      body: JSON.stringify(values), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(`/products/${data.id}`);
      });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={values.price}
        onChange={handleChange}
      />
      <input
        type="number"
        name="year"
        value={values.year}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}

export default NewProduct;
