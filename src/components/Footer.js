import React from "react";
import { Link } from "react-router-dom";


const Footer = () => (
  <div class="footer footer--dark">
    <div class="container">
      <div class="footer__inner">
        <Link to="/" class="footer__textLogo" style={{fontSize: '1.75rem'}}>
          CloudCompare
        </Link>
        <div class="footer__data">
          <div class="footer__data__item">
            <div class="footer__row" style={{fontSize: '1.25rem'}}>
              Created by{" "}

                Anthony Aoun, Cedric Brisebois, and Khang Nguyen
            </div>
 
          </div>
          <div class="footer__data__item" style={{fontSize: '1.25em'}}>
            <div class="footer__row">
              <Link to="/" href="https://undraw.co" target="_blank" class="footer__link">
                Home
              </Link>
            </div>
            <div class="footer__row">
              <Link to="/app" href="https://undraw.co" target="_blank" class="footer__link">
                App
              </Link>
            </div>
            <div class="footer__row">
              <Link to="/blog" href="https://undraw.co" target="_blank" class="footer__link">
                Blog
              </Link>
            </div>
            <div class="footer__row">
              <Link to="/contact" href="https://undraw.co" target="_blank" class="footer__link">
                Contact
              </Link>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
