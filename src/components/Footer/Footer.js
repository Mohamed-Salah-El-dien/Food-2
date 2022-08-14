/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/images/logo-footer.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div class="footer-wrapper">
        <a href="#">
          <img src={logo} alt="logo" class="footer-brand" width="130" />
        </a>

        <div class="social-link">
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
