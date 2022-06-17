import React, { useState } from 'react';
import Testimonies from './tabs/Testimonies';
import Services from './tabs/Services';
import Contact from './tabs/Contact';
import About from './tabs/About';
import Nav from './layout/Nav';
import Footer from './layout/Footer';


function Container() {
  
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
      {renderTab()}
      <Footer />
    </div>
  );
}

export default Container;