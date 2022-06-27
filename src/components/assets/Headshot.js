import profPic from '../images/christineHeadshot.png';
import React from 'react';
import './css/Headshot.css';

function Headshot(){
  return (
    <div className='container'>
      <div className='row center head-row'>
    <img className='headshot circle responsive-img' src = {profPic} alt="headshot"></img>
    </div>
    </div>
  );
}

export default Headshot;