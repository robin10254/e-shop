import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import AddOrderView from "./components/AddOrderView";
import AddProductView from "./components/AddProductView";
import HomePageView from "./components/HomePageView";
import LoginPageView from "./components/LoginPageView";
import OrderPageView from "./components/OrderPageView";
import ProductPageView from "./components/ProductPageView";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginPageView />} />
            <Route exact path="/home" element={<HomePageView />} />
            <Route exact path="/products" element={<ProductPageView />} />
            <Route exact path="/orders" element={<OrderPageView />} />
            <Route exact path="/login" element={<LoginPageView />} />
            <Route exact path="/add/product" element={<AddProductView />} />
            <Route exact path="/edit/product" element={<AddProductView />} />
            <Route exact path="/add/order" element={<AddOrderView />} />
            <Route exact path="/edit/order" element={<AddOrderView />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
