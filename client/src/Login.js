import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const clickHandler = () => {
    fetch('http://localhost:8080/users/', {
      method: 'POST',
      body: JSON.stringify({ nickname: user }), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          //const json = await res.json();
          //console.log(json);
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      })
      .catch((error) => {
        console.dir(error);
        setError(error.message);
      });
  };
  if (userInfo) {
    return (
      <div>
        <span>{userInfo.id}</span>
        <span> : </span>
        <span>{userInfo.nickname}</span>
      </div>
    );
  }
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
