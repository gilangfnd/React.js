import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg fixed-top bg-transparent'>
        <div className='container-fluid'>
          {/* <a className='navbar-brand'>Logo</a> */}
          <button className='navbar-toggler' 
          type='button' data-bs-toggle='collapse' 
          data-bs-target='#navbarNavAltMarkup' 
          aria-controls='navbarNavAltMarkup' 
          aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'>
            <button className='fi-menu d-lg-none' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
            </button>

            <div className='offcanvas offcanvas-end' tabIndex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
              <div className='offcanvas-header'>
                <h5 className='offcanvas-title' id='offcanvasExampleLabel'>BCR</h5>
                <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
              </div>
              <div className='offcanvas-body'>
                <div>
                  <a className='nav-link text-bg-dark' aria-current='page' href='#our-section'>Our Services</a>
                  <a className='nav-link' href='#why-us-section'>Why Us</a>
                  <a className='nav-link' href='#testimonial-section'>Testimonial</a>
                  <a className='nav-link' href='#faq-section'>FAQ</a>
                  <button className='btn tombol'>Register</button>
                </div>
              </div>
            </div>
          </span>
          </button>



          <div className='collapse navbar-collapse'>
            <div className='navbar-nav ms-auto'>
              <a className='nav-link' aria-current='page' href='#our-section'>Our Services</a>
              <a className='nav-link' href='#why-us-section'>Why Us</a>
              <a className='nav-link' href='#testimonial-section'>Testimonial</a>
              <a className='nav-link' href='#faq-section'>FAQ</a>
              <button className='btn tombol'>Register</button>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
