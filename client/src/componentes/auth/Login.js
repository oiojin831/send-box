import { useState } from 'react';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Login = ({ setUserInfo }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState(null);

  const clickHandler = () => {
    fetch(`${SERVER_URL}/users/`, {
      method: 'POST',
      body: JSON.stringify({ nickname: user }), // data can be `string` or {object}!
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
  return (
    <>
      <div>
        <input value={user} onChange={(e) => setUser(e.target.value)} />
        <button onClick={clickHandler}>Login</button>
      </div>
      {error ? <div style={{ color: 'red' }}>{error}</div> : null}
    </>
  );
};

export default Login;
