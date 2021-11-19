import Login from './Login';
import Logout from './Logout';
import useLocalStorage from './utils/useLocalStorage';

const NavigationBar = () => {
  const [user, setUser] = useLocalStorage('user');

  return (
    <div>
      {user ? (
        <Logout setUserInfo={setUser} />
      ) : (
        <Login userInfo={user} setUserInfo={setUser} />
      )}
    </div>
  );
};

export default NavigationBar;
