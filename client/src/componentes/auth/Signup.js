import { useState } from 'react';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = ({ setUserInfo }) => {
  const [newUser, setNewUser] = useState({ nickname: '', name: '', email: '' });
  const [error, setError] = useState(null);

  const clickHandler = () => {
    fetch(`${SERVER_URL}/users/new`, {
      method: 'POST',
      body: JSON.stringify(newUser), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          //const json = await res.json();
          //console.log(json);
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div>
        <span>가입하기</span>
        <input
          value={newUser.nickname}
          name="nickname"
          onChange={handleInputChange}
          placeholder="nickname"
        />
        <input
          value={newUser.name}
          name="name"
          onChange={handleInputChange}
          placeholder="name"
        />
        <input
          value={newUser.email}
          name="email"
          type="email"
          onChange={handleInputChange}
          placeholder="email"
        />
        <button onClick={clickHandler}>Signup</button>
      </div>
      {error ? <div style={{ color: 'red' }}>{error}</div> : null}
    </>
  );
};

export default Signup;
