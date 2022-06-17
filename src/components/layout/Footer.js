import React from 'react';
import '../assets/css/Footer.css';

function Footer() {
  return(
    
    <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5><a class="link1 black-text" href="https://calendly.com/cabellovirtualconsultants/discovery-call?month=2022-06">Click here to book a call with me!</a></h5>
          <p class="white-text">Ready to take your business to the next level?</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Contact Me</h5>
          <ul>
            <li class="black-text">christine@cabellovirtual.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © 2022 Copyright 
      <a class="grey-text text-lighten-4 right" href="#!">More</a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;