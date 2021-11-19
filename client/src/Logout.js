const Logout = ({ setUserInfo }) => {
  return (
    <div>
      <button onClick={() => setUserInfo(null)}>logout</button>
    </div>
  );
};

export default Logout;
