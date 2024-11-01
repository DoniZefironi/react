import React from 'react';
import HeaderBlock from './headerblock/headerblock';
import './header.css';
import image from '../image/punch.png';

export default function Header() {
  return (
    <header>
      <a className="ah1a" href="/glav/index.html">
        <img src={image} alt="Logo" />
      </a>
      <div className="burger-menu" id="burgerMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <HeaderBlock />
    </header>
  );
}