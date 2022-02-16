import React from "react";
import heropic from './hero_pic.png'

function Hero(){
    return (
        <div className="main">
        <img src={heropic} className='herostyle' />
        <p className="maintext">Online Experiences</p>
         <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}

export default Hero;