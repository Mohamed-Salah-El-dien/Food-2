/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/cart.svg';
import menu1 from '../../assets/images/menu1.jpg';
import menu2 from '../../assets/images/menu2.jpg';
import menu3 from '../../assets/images/menu3.jpg';
import menu4 from '../../assets/images/menu4.jpg';
import menu5 from '../../assets/images/menu5.jpg';
import './Header.css';

const Header = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleCart = () => {
    setToggleCart(!toggleCart);
  };

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <a href="#">
            <img src={logo} alt="logo" width="130" />
          </a>

          <ul className={toggleMenu ? 'navbar-nav active' : 'navbar-nav'}>
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>

            <li>
              <a href="#menu" className="nav-link">
                Our Menu
              </a>
            </li>

            <li>
              <a href="#testimonials" className="nav-link">
                Testimonials
              </a>
            </li>
          </ul>

          <div className="navbar-btn-group">
            <button className="shopping-cart-btn" onClick={handleCart}>
              <img src={cart} alt="shopping cart icon" width="18" />
              <span className="count">5</span>
            </button>

            <button
              className={
                toggleMenu ? 'menu-toggle-btn active' : 'menu-toggle-btn'
              }
              onClick={handleMenu}
            >
              <span className="line one"></span>
              <span className="line two"></span>
              <span className="line three"></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={toggleCart ? 'cart-box active' : 'cart-box'}>
        <ul className="cart-box-ul">
          <h4 className="cart-h4">Your order.</h4>

          <li>
            <a href="#" className="cart-item">
              <div className="img-box">
                <img
                  src={menu1}
                  alt="product"
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>

              <h5 className="product-name">Saumon gravlax</h5>
              <p className="product-price">
                <span className="small">$</span>9
              </p>
            </a>
          </li>

          <li>
            <a href="#" className="cart-item">
              <div className="img-box">
                <img
                  src={menu2}
                  alt="produt"
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>

              <h5 className="product-name">Chevrefried with honey</h5>
              <p className="product-price">
                <span className="small">$</span>14
              </p>
            </a>
          </li>

          <li>
            <a href="#" className="cart-item">
              <div className="img-box">
                <img
                  src={menu3}
                  alt="product"
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>

              <h5 className="product-name">Crispy fish</h5>
              <p className="product-price">
                <span className="small">$</span>4
              </p>
            </a>
          </li>

          <li>
            <a href="#" className="cart-item">
              <div className="img-box">
                <img
                  src={menu4}
                  alt="product"
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>

              <h5 className="product-name">Stracciatella</h5>
              <p className="product-price">
                <span className="small">$</span>11
              </p>
            </a>
          </li>

          <li>
            <a href="#" className="cart-item">
              <div className="img-box">
                <img
                  src={menu5}
                  alt="product"
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>

              <h5 className="product-name">Sea bream carpaccio</h5>
              <p className="product-price">
                <span className="small">$</span>19
              </p>
            </a>
          </li>
        </ul>

        <div className="cart-btn-group">
          <button className="btn btn-secondary">View order</button>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
