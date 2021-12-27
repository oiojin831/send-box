import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function EditProduct() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    price: 0,
    year: 0,
  });
  const { id } = useParams();
  useEffect(() => {
    fetch(`${SERVER_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setValues(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${SERVER_URL}/${id}`, {
      method: 'PUT',
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

export default EditProduct;
