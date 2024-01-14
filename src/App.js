import './App.css';
// react router v6
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, CategoryProduct, ProductSingle, Cart,} from "./pages/index";
// components
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import {Provider} from "react-redux";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* home page route */}
            <Route path = "/" element = {<Home />} />
            {/* single product route */}
            <Route path = "/product/:id" element = {<ProductSingle />} />
            {/* category wise product listing route */}
            <Route path = "/category/:category" element = {<CategoryProduct />} />
            {/* cart */}
            <Route path = "/cart" element = {<Cart />} />
            
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
