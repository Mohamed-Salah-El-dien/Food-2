import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import test1 from '../../assets/images/testimonials1.jpg';
import test2 from '../../assets/images/testimonials2.jpg';
import './Test.css';

const Test = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="section-title">What our customers say?</h2>

      <p className="section-text">
        Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
      </p>

      <div className="testimonials-grid">
        <div className="testimonials-card">
          <h4 className="card-title">Very tasty</h4>

          <div className="testimonials-rating">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
          </div>

          <p className="testimonials-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            fugiat totam nobis quas unde excepturi inventore possimus laudantium
            provident, rem eligendi velit. Aut molestias, ipsa itaque laborum,
            natus tempora, ut soluta animi ducimus dignissimos deserunt
            doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam
            dolor harum!
          </p>

          <div className="customer-info">
            <div className="customer-img-box">
              <img
                src={test1}
                alt="customer"
                className="customer-img"
                width="100"
                loading="lazy"
              />
            </div>

            <h5 className="customer-name">Emma Newman</h5>
          </div>
        </div>

        <div className="testimonials-card">
          <h4 className="card-title">I have lunch here every day</h4>

          <div className="testimonials-rating">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
          </div>

          <p className="testimonials-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            fugiat totam nobis quas unde excepturi inventore possimus laudantium
            provident, rem eligendi velit. Aut molestias, ipsa itaque laborum,
            natus tempora, ut soluta animi ducimus dignissimos deserunt
            doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam
            dolor harum!
          </p>

          <div className="customer-info">
            <div className="customer-img-box">
              <img
                src={test2}
                alt="customer"
                className="customer-img"
                width="100"
                loading="lazy"
              />
            </div>

            <h5 className="customer-name">Paul Trueman</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
