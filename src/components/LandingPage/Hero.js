import React from 'react';

import './Hero.css';
// import logo from '../logo.svg';
// import '../App.css';

function Hero() {
  return (
    <div className="hero-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 item-hero hero-text">
              <h1>Sewa dan Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br/> untuk sewa mobil selama 24 jam.</p>
              <a className="btn tombol" href="/landing">Mulai Sewa Mobil</a>
            </div>
            <div className="col-sm-12 item-hero img-car col-lg-6">
              <img className="img-fluid" src="https://ik.imagekit.io/falonez/img_car-2_9ov2I44ZW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667652661585" alt=""/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Hero;
