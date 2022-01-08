import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiClient } from '../../utils/api-client';

function Order() {
  const [status, setStatus] = useState('loading');
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus('loading');
        const order = await apiClient(`orders/${id}`);
        setOrder(order);
        setStatus('success');
      } catch (err) {
        console.log('erroro', err);
      }
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isSuccess) {
    return (
      <div key={`${order.id}-${order}`}>
        <div>order id: {order.id}</div>
        <div>product name: {order.product.name}</div>
        <div>price: {order.product.price}</div>
        <div>seller nickname: {order.seller.nickname}</div>
        <div>seller name: {order.seller.nickname}</div>
        <br />
      </div>
    );
  }
}

export default Order;
