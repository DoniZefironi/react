import React from "react";
import './buttonblack.css';

function ButtonBlackStyle({ title, onClickEvent }) {
    return (
        <button className="button-black-style" onClick={onClickEvent}>
            {title}
        </button>
    );
}

export default ButtonBlackStyle;