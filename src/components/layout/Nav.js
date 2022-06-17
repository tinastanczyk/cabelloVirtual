import React, { useState } from 'react';
import '../assets/css/Nav.css';

function Nav({ currentTab, handleTabChange }) {
  return (
    <nav>
      <div className='nav-wrapper'>
      <a href="#about" className="brand-logo" onClick={() => handleTabChange('About')} >Cabello Virtual</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className = 'right hide-on-med-and-down'>
          <li className={currentTab === 'About' ? 'active' : '' }><a href='#about' onClick={() => handleTabChange('About')}  >About</a></li>
          <li className={currentTab === 'Services' ? 'active' : '' }><a href='#services' onClick={() => handleTabChange('Services')}  >Services</a></li>
          <li className={currentTab === 'Testimonies' ? 'active' : '' }><a href='#testimonies' onClick={() => handleTabChange('Testimonies')} >Testimonies</a></li>
          <li className={currentTab === 'Contact' ? 'active' : '' }><a href='#contact' onClick={() => handleTabChange('Contact')} >Contact</a></li>
        </ul>
        <ul className='sidenav' id="mobile-demo">
          <li className={currentTab === 'About' ? 'active' : '' }><a href='#about' onClick={() => handleTabChange('About')} >About</a></li>
          <li className={currentTab === 'Services' ? 'active' : '' }><a href='#services' onClick={() => handleTabChange('Services')} >Services</a></li>
          <li className={currentTab === 'Testimonies' ? 'active' : '' }><a href='#testimonies' onClick={() => handleTabChange('Testimonies')} >Testimonies</a></li>
          <li className={currentTab === 'Contact' ? 'active' : '' }><a href='#contact' onClick={() => handleTabChange('Contact')} >Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;