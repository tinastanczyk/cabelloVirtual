import wood from '../images/wood-pink.png';
import React from 'react';
import './css/Wood.css';
import { Parallax } from 'react-parallax';

function Wood(){
  
  return (
    <Parallax blur={0} bgImage={wood} bgImageAlt="pink wood" strength={200}>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </Parallax>
  );
}

export default Wood;