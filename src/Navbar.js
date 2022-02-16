import React from 'react';
import logo from './airbnb_logo.png';

function Navbar() {
    return (
        <nav className='navstyle'>
            <img src={logo} className='logostyle' />
        </nav>
    );
}

export default Navbar;