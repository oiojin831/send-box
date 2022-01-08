import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Product, Products, NewProduct, EditProduct } from './pages/products';
import { Order, Orders } from './pages/orders';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import NavigationBar from './componentes/layouts/NavigationBar';
import useLocalStorage from './utils/useLocalStorage';

export const UserContext = createContext();

function UserProvider(props) {
  const [user, setUser] = useLocalStorage('user');
  const value = [user, setUser];
  return <UserContext.Provider value={value} {...props} />;
}

function App() {
  return (
    <UserProvider>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<Order />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
