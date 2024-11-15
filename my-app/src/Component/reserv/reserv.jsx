import React from 'react';
import './reserv.css';

export default function Reserv() {
  return (
    <>
            <div className="reserv">
            <div className="reserv">
                <h2 id="bronstol">Table reservations</h2>
                <p>+375 29 608-13-50</p>
            </div>
            <button className="butreserv" id="bronirovan">Booking</button>
        </div>
        <div className="text">
                <h2 id="stol">Table reservation and delivery</h2>
            <div className="textintext">
                <p id="mipredlog">We offer our visitors the opportunity to book a table in our restaurant and deliver our dishes and drinks. If you want to spend a pleasant time in our stylish and cozy restaurant, we are pleased to offer you a table reservation service. You can reserve a table in advance to be sure that you will have a comfortable place to spend time in our establishment. Just call us at the following number: To reserve a table in a restaurant: 80222 65-65-68 Our staff will help you choose a convenient time and choose the most suitable table for your company. We strive to make your visit to our restaurant pleasant and comfortable. Additionally, if you prefer to enjoy our food and drinks at your home or office, we also offer a delivery service. Just call us at the following number: For delivery of our dishes and drinks: +375 29 540-40-40 We will try our best to ensure that your order is delivered on time and meets your expectations.</p>
            </div>
            <div className="buttontext">
                <button className="butreserv" id="bronirov">Booking</button>
                <button className="butreserv" id="dostavka">Delivery</button>
            </div>
        </div>
        </>
  );
}