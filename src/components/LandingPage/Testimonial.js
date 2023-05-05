import React from 'react';

import './Testimonial.css';
// import logo from '../logo.svg';
// import '../App.css';

function Testimonial() {
  return (
    <div className="testimonial-section" id="testimonial-section">
        <div className="testimonial-content">
          <h1>Testimonial</h1>
          <p className="testimonial-p">Berbagai review positif dari para pelanggan kami</p>
          <div className="owl-carousel owl-theme">
            <div className="item d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start">
              <img className="img-testimonial" src="assets/img/img_photo-1.png" alt=""/>
              <div className="comment">
                <div className="star-item d-flex flex-row justify-content-center justify-content-lg-start">
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                </div>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur, sed do eiusmod lorem ipsum dolor, consectetur adipiscing elit, sed do eiusmod”</p>
                <h1 className="textku">John Dee 32, Bromo</h1>
              </div>
            </div>
            <div className="item d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start">
              <img className="img-testimonial" src="assets/img/img_photo-2.png" alt=""/>
              <div className="comment">
                <div className="star-item d-flex flex-row justify-content-center justify-content-lg-start">
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                </div>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur, sed do eiusmod lorem ipsum dolor, consectetur adipiscing elit, sed do eiusmod”</p>
                <h1 className="textku">John Dee 32, Bromo</h1>
              </div>
            </div>
            <div className="item d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start">
              <img className="img-testimonial" src="assets/img/img_photo-1.png" alt=""/>
              <div className="comment">
                <div className="star-item d-flex flex-row justify-content-center justify-content-lg-start">
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                </div>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur, sed do eiusmod lorem ipsum dolor, consectetur adipiscing elit, sed do eiusmod”</p>
                <h1 className="textku">John Dee 32, Bromo</h1>
              </div>
            </div>
            <div className="item d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start">
              <img className="img-testimonial" src="assets/img/img_photo-2.png" alt=""/>
              <div className="comment">
                <div className="star-item d-flex flex-row justify-content-center justify-content-lg-start">
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                  <img className="star" src="assets/img/star1.png" alt=""/>
                </div>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur, sed do eiusmod lorem ipsum dolor, consectetur adipiscing elit, sed do eiusmod”</p>
                <h1 className="textku">John Dee 32, Bromo</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Testimonial;
