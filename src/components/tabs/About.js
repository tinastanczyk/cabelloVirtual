import React, { useState } from 'react';
import "../assets/css/About.css";
import Headshot from '../assets/Headshot';
import '../assets/css/Headshot.css';


function About() {
  return(
    <div class="container">
      
      <div>
        <h1 class="center-align">Cabello Virtual Consultants</h1>
        <h2 class="center-align">Virtual Assist Services Portfolio</h2>
      </div>
      <div>
        <Headshot />
      </div>
      <div>
        <h3 class="center-align">Welcome, I'm Christine Cabello!</h3>
        <h4 class="center-align">Founder of Cabello Virtual Consultants</h4>

        <p class="center-align">Hi! I am so happy to meet you! I'm Christine and I'm here to help you focus
          on what's important--YOUR BUSINESS! I have a Bachelor's Degree in
          Business Administration and 20+ years experience in the healthcare
          industry as an Administrative Assistant and Supervisor! I've worked for
          some of the countries' best hospitals and now I'm using my talents,
          experience and education to help off load the mundane every day tasks of
          a business owner, virtually. I focus on the back-end stuff so you don't
          have to! Consider me your secret weapon! Outside of running my
          business, I am a mother of 2 very active boys, a wife and cat mom.
          Looking forward to helping you with your business needs!
        </p>
      </div>
    </div>
  );
}

export default About;