import React, { useState } from 'react';
import Testimonies from './tabs/Testimonies';
import Services from './tabs/Services';
import Contact from './tabs/Contact';
import About from './tabs/About';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Wood from './assets/Wood';
import './assets/css/Wood.css';


function CabelloVirtualContainer() {
  
  const [currentTab, setCurrentTab] = useState('About');

  const renderTab = () => {

    if(currentTab === 'About'){
      return <About />;
    }

    if(currentTab === 'Services'){
      return <Services />
    }

    if(currentTab === 'Testimonies'){
      return <Testimonies />;
    }

    if(currentTab === 'Contact'){
      return <Contact />;
    }
  }

  const handleTabChange = (tab) => setCurrentTab(tab);

  return (
    <div>
      <Nav currentTab={currentTab} handleTabChange={handleTabChange} />
      <Wood />
      {renderTab()}
      <Wood />
      <Footer />
    </div>
  );
}

export default CabelloVirtualContainer;