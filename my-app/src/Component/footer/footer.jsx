import React from 'react';
import UpTextFooter from './uptextfooter/uptextfooter';
import DownFooter from './downfooter/downfooter';
import './footer.css';

export default function Footer(){
    return (
        <footer>
        <div className="imgfooter">
        </div>
        <div className="textfooter">
        <UpTextFooter />
        <DownFooter />
        </div>
    </footer>
    );
  }