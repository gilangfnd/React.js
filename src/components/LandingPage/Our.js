import React from 'react';

import './Our.css';
// import logo from '../logo.svg';
// import '../App.css';

function Our() {
  return (
    <div className="our-section" id="our-section">
        <div className="our-content">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
              <img className="img-service img-fluid" src="https://ik.imagekit.io/falonez/img_service_ynqsgEIQA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667652828237" alt=""/>
            </div>
            </div>
            <div className="offset-lg-1 col-lg-5 col-12">
              <div className="text-our-content">
              <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
              <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
              <ul>
                <li><img src="assets/img/checklist_icon.svg" alt=""/><span>Sewa Mobil Dengan Supir di Bali 12 Jam</span></li>
                <li><img src="assets/img/checklist_icon.svg" alt=""/>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li><img src="assets/img/checklist_icon.svg" alt=""/>Sewa Mobil Jangka Panjang Bulanan</li>
                <li><img src="assets/img/checklist_icon.svg" alt=""/>Gratis Antar - Jemput Mobil di Bandara</li>
                <li><img src="assets/img/checklist_icon.svg" alt=""/>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Our;
