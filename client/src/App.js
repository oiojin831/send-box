import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import Product from './Product';
import NewProduct from './NewProduct';
import EditProduct from './EditProduct';
import Landing from './Landing';
import Dashboard from './Dashboard';
import NavigationBar from './NavigationBar';
import useLocalStorage from './utils/useLocalStorage';

function App() {
  const [user, setUser] = useLocalStorage('user');
  return (
    <>
      <NavigationBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
