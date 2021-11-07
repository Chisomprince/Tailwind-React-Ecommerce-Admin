import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Orders from "./pages/orders";
import Products from "./pages/products";
import AddProductPage from "./pages/addProduct";
import Customers from "./pages/customers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
