import { useContext } from 'react';
import { UserContext } from './App';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';

const NavigationBar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      {user ? (
        <>
          <div>
            <span>{user.id}</span>
            <span> : </span>
            <span>{user.nickname}</span>
          </div>
          <Logout setUserInfo={setUser} />
        </>
      ) : (
        <>
          <Signup setUserInfo={setUser} />
          <Login setUserInfo={setUser} />
        </>
      )}
    </div>
  );
};

export default NavigationBar;
