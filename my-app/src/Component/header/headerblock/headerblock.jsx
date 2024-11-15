import React from 'react';
import { Link } from 'react-router-dom';
import './headerblock.css';
import ButtonBoost from "../../buttoboost/buttonboost"
import ButtonGroup from '../../buttoboost/groupbutton';

export default function HeaderBlock(){
  return (
    <div className="header-block1" id="headerBlock">
    <nav className="header-nav">
      <a href="#place" id="home">HOME</a>
      <Link to="/placecomponent">ABOUT US</Link>
      <Link to="/foods">MENU</Link>
      <a href="#honest" id="drinkmenu">DRINKS MENU</a>
      <a href="#diners" id="contact">CONTACTS</a>
      <Link to="/cards">GIFT VOUCHERS</Link>
      <Link to="/reserv">RESERVATION</Link>
      <ButtonBoost className="block-sign" id="languageButton" >English</ButtonBoost>
      <button className="block-sign" id="themeButton" >Переключить тему</button>
      <ButtonGroup />
      <span id="usernameDisplay" style={{ display: 'none' }}></span>
      <button className="block-sign" id="logout" style={{ display: 'none' }}>Logout</button>
    </nav>
  </div>
  );
}