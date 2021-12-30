import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Order() {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderRes = await fetch(`${SERVER_URL}/orders/${id}`);
        const order = await orderRes.json();
        const productRes = await fetch(
          `${SERVER_URL}/products/${order.productId}`
        );
        const product = await productRes.json();
        const userRes = await fetch(`${SERVER_URL}/users/${order.userId}`);
        const seller = await userRes.json();
        const newOrder = {
          id: order.id,
          product,
          seller,
        };
        setOrder(newOrder);
      } catch (err) {
        console.log('erroro', err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div key={`${order.id}-${order}`}>
      <div>order id: {order.id}</div>
      {/* <div>product name: {order.product.name}</div>
      <div>price: {order.product.price}</div>
      <div>seller nickname: {order.seller.nickname}</div>
      <div>seller name: {order.seller.nickname}</div> */}
      <br />
    </div>
  );
}

export default Order;
