import React from 'react';
import './display.scss';

function Display(props) {
    return (
        <h1 id="display-container">
            <h1 id="display">{props.current_key}</h1>
        </h1>
    )
}

export default Display
