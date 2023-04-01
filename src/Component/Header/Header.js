import React from 'react';
import './Header.css'

const Header = () => {
    return (
         <div className='header'>
            <div className='header-title-container'>
                <h1>Knowledge Corner</h1>
            </div>
            <nav>
            <a href="/home">Home</a>
            <a href="/about-us">About Us</a>
            <a href="/blog">Blog</a>
            </nav>
        </div>
    );
};

export default Header;