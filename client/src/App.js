import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import Product from './Product';
import NewProduct from './NewProduct';
import EditProduct from './EditProduct';
import Landing from './Landing';
import Dashboard from './Dashboard';
import NavigationBar from './NavigationBar';
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
      </Routes>
    </UserProvider>
  );
}

export default App;
