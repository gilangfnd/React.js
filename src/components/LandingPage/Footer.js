import React from 'react';

import './Footer.css';
// import logo from '../logo.svg';
// import '../App.css';

function Footer() {
  return (
        <footer>
        <div className="footer-content">
        <div className="row">
            <div className="col-lg-3 col-12">
            <div className="address">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            </div>
            <div className="col-lg-3 col-12">
            <div className="menu">
                <a className="nav-link" aria-current="page" href="#our-section">Our Services</a>
                <a className="nav-link" href="#why-us-section">Why Us</a>
                <a className="nav-link" href="#testimonial-section">Testimonial</a>
                <a className="nav-link" href="#faq-section">FAQ</a>
            </div>
            </div>
            <div className="col-lg-3 col-12">
            <div className="social-media">
                <p>Connect with us</p>
                <img src="assets/img/icon_instagram-1.png" alt="Instagram"/>
                <img src="assets/img/icon_facebook-1.png" alt="Facebook"/>
                <img src="assets/img/icon_twitter-1.png" alt="Twitter"/>
                <img src="assets/img/icon_mail-1.png" alt="Mail"/>
                <img src="assets/img/icon_twitch-1.png" alt="Twicth"/>
            </div>
            </div>
            <div className="col-lg-3 col-12">
            <div className="copy-right">
            <p>Copyright Binar 2022</p>
            <div className="logo"></div>
            </div>
            </div>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
