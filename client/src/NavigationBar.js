import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import useLocalStorage from './utils/useLocalStorage';

const NavigationBar = () => {
  const [user, setUser] = useLocalStorage('user');

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
