import React from 'react';
import { Link } from 'react-router-dom';
import './headerblock.css';

export default function HeaderBlock(){
  return (
    <div className="header-block1" id="headerBlock">
    <nav className="header-nav">
      <a href="#place" id="home">HOME</a>
      <Link to="/placecomponent">ABOUT US</Link>
      <a href="#themenu" id="menus">MENU</a>
      <a href="#honest" id="drinkmenu">DRINKS MENU</a>
      <a href="#diners" id="contact">CONTACTS</a>
      <Link to="/cards">GIFT VOUCHERS</Link>
      <Link to="/reserv">RESERVATION</Link>
      <button className="block-sign" id="languageButton" >English</button>
      <button className="block-sign" id="themeButton" >Переключить тему</button>
      <button className="block-sign" id="sign">Sign Up</button>
      <button className="block-sign" id="aut">Authorization</button>
      <span id="usernameDisplay" style={{ display: 'none' }}></span>
      <button className="block-sign" id="logout" style={{ display: 'none' }}>Logout</button>
    </nav>
  </div>
  );
}