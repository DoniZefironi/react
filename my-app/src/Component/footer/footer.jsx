import React from 'react';
import UpTextFooter from './uptextfooter/uptextfooter';
import DownFooter from './downfooter/downfooter';
import './footer.css';

export default function Footer(){
    return (
        <footer>
        <div class="imgfooter">
        </div>
        <div class="textfooter">
        <UpTextFooter />
        <DownFooter />
        </div>
    </footer>
    );
  }