import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, } from 'react-redux';
import { getAllCarts, getCartItemsCount, getCartTotal } from '../../store/cartSlice';
import CartModal from "../CartModal/CartModal";

const Navbar = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);
  
  return (
    <header>
      <section className="headerContact">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <span>
                <i className="bi bi-phone-fill"></i> <Link to="tel:234 907 113 0455">+(225) 555-0118  </Link>
              </span>
              <span>
                <i className="bi bi-envelope-open-fill"></i> <Link to="#">michelle.rivera@example.com </Link>
              </span>
            </div>
            <div className="col-lg-5">
              <div className="text-center all">
                Follow Us and get a chance to win 80% off
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cloak">
                Follow Us :
                <i className="bi bi-envelope-open-fill"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-telegram"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <h4>
              Bandage
            </h4>
          </Link>
          <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <i className="fas fa-bars"></i>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-100" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button data-bs-dismiss="offcanvas">
                <i className="bi bi-x-square"></i>
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1">
                <li className="nav-item">
                  <Link to="/" className="routers nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/" className="nav-link dropdown-toggle">
                    Shop
                  </Link>
                  <div className="dropdown-content container desktop-dropdown">

                  </div>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Pages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="login-div">
                <Link to="" className="btn-login">
                  <i className="bi bi-person"></i> Login / Register
                </Link>
                <i className="bi bi-search"></i>
                <i className="bi bi-heart"></i>
                <span>
                <Link to="/cart" className='cart-btn'>
                  <div className='cart-items-value'> <i className="bi bi-cart3"></i><span className='above'>{itemsCount}</span></div>
                  <CartModal carts={carts} />
                </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar