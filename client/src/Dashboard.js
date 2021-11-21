import { Navigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
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
