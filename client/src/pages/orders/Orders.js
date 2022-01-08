import { useState, useEffect } from 'react';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Orders() {
  const [status, setStatus] = useState('loading');
  const [orders, setOrders] = useState([]);

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

  useEffect(() => {
    setStatus('loading');
    fetch(`${SERVER_URL}/orders`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
        setStatus('success');
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isSuccess) {
    return (
      <div>
        {orders.map((order) => {
          return (
            <div key={`${order.id}`}>
              <div>{order.id}</div>
              <div>product name: {order.product.name}</div>
              <div>price: {order.product.price}</div>
              <div>seller nickname: {order.seller.nickname}</div>
              <div>seller name: {order.seller.nickname}</div>
              <button onClick={() => console.log('not implemented yet')}>
                edit
              </button>
              <button onClick={() => console.log('not implemented yet')}>
                delete
              </button>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Orders;
