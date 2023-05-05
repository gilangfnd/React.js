import React from 'react';

import './Why.css';
// import logo from '../logo.svg';
// import '../App.css';

function Why() {
  return (
    <div className="why-us-section" id="why-us-section">
        <div className="why-us-content">
          <div className="row justify-content-center">
            <h1 className="text-center text-lg-start">Why US?</h1>
            <p className="text-center text-lg-start">Mengapa harus pilih Binar Car Rental?</p>
            <div className="col-lg-3 col-12 col-sm-6">
              <div className="card">
              <div className="card-body">
                <img src="assets/img/icon_complete-1.png" alt=""/>
                <h5 className="card-title">Mobil Lengkap</h5>
                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
            </div>
            </div>
            <div className="col-lg-3 col-12 col-sm-6">
              <div className="card">
              <div className="card-body">
                <img src="assets/img/icon_price-1.png" alt=""/>
                <h5 className="card-title">Harga Murah</h5>
                <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              </div>
            </div>
            </div>
            <div className="col-lg-3 col-12 col-sm-6">
              <div className="card">
              <div className="card-body">
                <img src="assets/img/icon_24hrs-1.png" alt=""/>
                <h5 className="card-title">Layanan 24 Jam</h5>
                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              </div>
            </div>
            </div>
            <div className="col-lg-3 col-12 col-sm-6">
              <div className="card">
              <div className="card-body">
                <img src="assets/img/icon_professional-1.png" alt=""/>
                <h5 className="card-title">Sopir Profesional</h5>
                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Why;
