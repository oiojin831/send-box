import { useNavigate, Navigate } from 'react-router-dom';
const Landing = ({ user }) => {
  const navigate = useNavigate();
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
