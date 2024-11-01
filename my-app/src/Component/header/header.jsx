import React from 'react';
import HeaderBlock from './headerblock/headerblock';
import './header.css';

export default function Header({organization}){
    return (
      <header>
        <a className="ah1a" href="/glav/index.html">{organization}</a>
        <div className="burger-menu" id="burgerMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <HeaderBlock />
      </header>
    );
  }