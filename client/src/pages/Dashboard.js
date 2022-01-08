import { useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate, Navigate } from 'react-router-dom';

const Dashboard = () => {
  const [user] = useContext(UserContext);
  const navigate = useNavigate();
  if (user === null) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div>
      <div onClick={() => navigate('/products')}>Go to products list</div>
      <div onClick={() => navigate('/orders')}>Go to orders list</div>
    </div>
  );
};

export default Dashboard;
