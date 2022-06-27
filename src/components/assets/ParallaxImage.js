import computer from '../images/computerimage.png';
import React from 'react';
import './css/ParallaxImage.css';
import { Parallax } from 'react-parallax';

function ParallaxImage(){
  
  return (
    <Parallax blur={0} bgImage={computer} bgImageAlt="pink computer" strength={200}>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      
    </Parallax>
  );
}

export default ParallaxImage;