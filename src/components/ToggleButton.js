import React from 'react';
import "./Styles/Navbar.css";

const ToggleButton=props=>(
    <button className="toggle-btn" onClick={props.click}>
        <div className="toggle-btn-line" />
        <div className="toggle-btn-line" />
        <div className="toggle-btn-line" />
    </button>
);

export default ToggleButton