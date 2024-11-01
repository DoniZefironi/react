import React from 'react';
import './downtextfooter.css';

export default function DownFooter(){
    const { organization } = this.props;
    return (
        <div class="downfooter">
        <p>© 2022 WAYGOOD</p>
        <p id="slova">Words by Mia Barry</p>
        <p id="photo">Photography by Chris Paulsen</p>
        <p id="disain">Design by After Hours Studio</p>
    </div>
    );
  }
