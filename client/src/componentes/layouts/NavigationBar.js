import { useContext } from 'react';
import { UserContext } from '../../App';
import { Login, Logout, Signup } from '../auth';

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
