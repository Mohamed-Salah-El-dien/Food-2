/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import menu from '../../assets/images/menu.svg';
import menu1 from '../../assets/images/menu1.jpg';
import menu2 from '../../assets/images/menu2.jpg';
import menu3 from '../../assets/images/menu3.jpg';
import menu4 from '../../assets/images/menu4.jpg';
import menu5 from '../../assets/images/menu5.jpg';
import './Products.css';

const Products = () => {
  return (
    <section className="product" id="menu">
      <h2 className="section-title">Most popular dishes</h2>

      <p className="section-text">
        Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
      </p>

      <div className="products-grid">
        <a href="#">
          <div className="product-card">
            <div className="img-box">
              <img
                src={menu1}
                alt="product"
                className="product-img"
                width="200"
                loading="lazy"
              />
            </div>

            <div className="product-content">
              <div className="wrapper">
                <h3 className="product-name">Stracciatella</h3>

                <p className="product-price">
                  <span className="small">$</span>11
                </p>
              </div>

              <p className="product-text">
                tomatoes, nori, feta cheese, mushrooms, rice noodles, corn,
                shrimp.
              </p>

              <div className="product-rating">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="product-card">
            <div className="img-box">
              <img
                src={menu2}
                alt="product"
                className="product-img"
                width="200"
                loading="lazy"
              />
            </div>

            <div className="product-content">
              <div className="wrapper">
                <h3 className="product-name">Chevrefrit au miel</h3>

                <p className="product-price">
                  <span className="small">$</span>14
                </p>
              </div>

              <p className="product-text">
                tomatoes, nori, feta cheese, mushrooms, rice noodles, corn,
                shrimp.
              </p>

              <div className="product-rating">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="product-card">
            <div className="img-box">
              <img
                src={menu3}
                alt="product"
                className="product-img"
                width="200"
                loading="lazy"
              />

              <div className="card-badge green">
                <ion-icon name="leaf"></ion-icon>
                <p>Vegan</p>
              </div>
            </div>

            <div className="product-content">
              <div className="wrapper">
                <h3 className="product-name">Saumon Gravlax</h3>

                <p className="product-price">
                  <span className="small">$</span>9
                </p>
              </div>

              <p className="product-text">
                tomatoes, nori, feta cheese, mushrooms, rice noodles, corn,
                shrimp.
              </p>

              <div className="product-rating">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="product-card">
            <div className="img-box">
              <img
                src={menu4}
                alt="product"
                className="product-img"
                width="200"
                loading="lazy"
              />

              <div className="card-badge red">
                <ion-icon name="flame"></ion-icon>
                <p>Hot</p>
              </div>
            </div>

            <div className="product-content">
              <div className="wrapper">
                <h3 className="product-name">Croustillant de poisson</h3>

                <p className="product-price">
                  <span className="small">$</span>4
                </p>
              </div>

              <p className="product-text">
                tomatoes, nori, feta cheese, mushrooms, rice noodles, corn,
                shrimp.
              </p>

              <div className="product-rating">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="product-card">
            <div className="img-box">
              <img
                src={menu5}
                alt="product"
                className="product-img"
                width="200"
                loading="lazy"
              />

              <div className="card-badge green">
                <ion-icon name="leaf"></ion-icon>
                <p>Vegan</p>
              </div>
            </div>

            <div className="product-content">
              <div className="wrapper">
                <h3 className="product-name">Carpaccio de daurade</h3>

                <p className="product-price">
                  <span className="small">$</span>6
                </p>
              </div>

              <p className="product-text">
                tomatoes, nori, feta cheese, mushrooms, rice noodles, corn,
                shrimp.
              </p>

              <div className="product-rating">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="product-card">
            <div className="img-box">
              <img
                src={menu2}
                alt="product"
                className="product-img"
                width="200"
                loading="lazy"
              />
            </div>

            <div className="product-content">
              <div className="wrapper">
                <h3 className="product-name">Chevrefrit au miel</h3>

                <p className="product-price">
                  <span className="small">$</span>14
                </p>
              </div>

              <p className="product-text">
                tomatoes, nori, feta cheese, mushrooms, rice noodles, corn,
                shrimp.
              </p>

              <div className="product-rating">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </div>
            </div>
          </div>
        </a>
      </div>

      <button className="btn btn-primary btn-icon">
        <img src={menu} alt="menu icon" />
        Full menu
      </button>
    </section>
  );
};

export default Products;
