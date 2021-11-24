import { useContext } from 'react';
import { UserContext } from './App';
import { useNavigate, Navigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const [user] = useContext(UserContext);
  if (user) {
    return <Navigate to="/dashboard" replace={true} />;
  }
  return (
    <div>
      <div>hello world</div>
      <div onClick={() => navigate('/products')}>go to products list</div>
    </div>
  );
};

export default Landing;
