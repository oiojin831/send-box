import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import Product from './Product';
import NewProduct from './NewProduct';
import EditProduct from './EditProduct';
import Landing from './Landing';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
