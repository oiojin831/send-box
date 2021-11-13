import { useNavigate } from 'react-router-dom';
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>hello world</div>
      <div onClick={() => navigate('/products')}>go to products list</div>
    </div>
  );
};

export default Landing;
