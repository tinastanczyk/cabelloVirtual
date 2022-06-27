import React, { useState } from 'react';
import Testimonials from './tabs/Testimonials';
import WhyVA from './tabs/WhyVA';
import Services from './tabs/Services';
import Contact from './tabs/Contact';
import About from './tabs/About';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import ParallaxImage from './assets/ParallaxImage';
import './assets/css/ParallaxImage.css';


function CabelloVirtualContainer() {
  
  const [currentTab, setCurrentTab] = useState('About');

  const renderTab = () => {

    if(currentTab === 'About'){
      return <About />;
    }

    if(currentTab === 'WhyVA'){
      return <WhyVA />
    }

    if(currentTab === 'Services'){
      return <Services />
    }

    if(currentTab === 'Testimonials'){
      return <Testimonials />;
    }

    if(currentTab === 'Contact'){
      return <Contact />;
    }
  }

  const handleTabChange = (tab) => setCurrentTab(tab);

  return (
    <div>
      <Nav currentTab={currentTab} handleTabChange={handleTabChange} />
      <ParallaxImage />
      {renderTab()}
      <ParallaxImage />
      <Footer />
    </div>
  );
}

export default CabelloVirtualContainer;