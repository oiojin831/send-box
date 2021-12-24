import { useContext } from 'react';
import { UserContext } from '../App';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const [user] = useContext(UserContext);
  if (user === null) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div>
      <div>dashboard</div>
    </div>
  );
};

export default Dashboard;
