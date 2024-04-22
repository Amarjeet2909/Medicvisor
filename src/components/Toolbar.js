import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import cit from "../assets/images/cit.png";
import Whatsapp from "../assets/images/Whatsapp.gif";
import emergency from "../assets/Icons/ambu-emergency.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typed from 'typed.js';
import "./Styles/Navbar.css";

const Toolbar = (props) => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowText(false);
      } else {
        setShowText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showText) {
      // Configuration for the Typed instance
      const options = {
        strings: ["Welcome to Hanuman Your Trusted Healthcare Companion"],
        typeSpeed: 80,
        loop: false,
        cursorChar: '👨‍⚕️ 🏥'
      };
    
      // Target the element with the "typing" class
      const targetElement = document.querySelector(".typing3");
    
      if (targetElement) {
        // Create a new Typed instance
        const typed = new Typed(targetElement, options);
    
        // Cleanup on unmount
        return () => {
          typed.destroy();
        };
      }
    }
  }, [showText]);


  const whatsappNumber = "9264198199";

  const openWhatsappChat = () => {
      const defaultMessage = "Hi Hanuman";
      const encodedMessage = encodeURIComponent(defaultMessage);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowText(false);
      } else {
        setShowText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showText && (
        <div className="text-above-navbar">
          <div className="contact-info">
            <span className="typing3"></span>
          </div>
          <div className="contact-info1">
        <img className="emergencyIcon" src={emergency} alt="Emergency icon" />
          <span className="typing4"><p>Call for Emergency 9065389731</p></span>
      </div>

        </div>
      )}
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div>
            <ToggleButton click={props.sideDrawerToggler} />
          </div>
          <div className="Whatsapplogo" onClick={openWhatsappChat}>
            <img src={Whatsapp} alt=" " className="Whatsapplogo-image" />
          </div>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <div className="logo">
              <img src={cit} alt=" " className="logo-image" />
            </div>
          </Link>
          <div className="spacer" />
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/home" exact className="activeclass">
                  Home
                </NavLink>
              </li>

              <li className="dropdownmenu">
                <button className="dropbtn">
                  <span>Ambulance</span>
                  <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                  <NavLink to="/courses" exact className="activeclass">
                    Road Ambulance
                  </NavLink>
                  <NavLink to="" exact className="activeclass">
                    Train Ambulance
                  </NavLink>
                  <NavLink to="/Strength" exact className="activeclass">
                    Air ambulance
                  </NavLink>
                  <NavLink to="/mou" exact className="activeclass">
                    Admission Assistance
                  </NavLink>
                </div>
              </li>

              <li>
                <NavLink
                  to="/our-recruiters"
                  exact
                  className="activeclass"
                >
                  Diagnostic
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/our-recruiters"
                  exact
                  className="activeclass"
                >
                  Body Checkup
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/procedure-and-policies"
                  exact
                  className="activeclass"
                >
                  Nursing
                </NavLink>
                </li>

              <li className="dropdownmenu">
                <button className="dropbtn">
                  <span>About Us </span>
                  <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                  <NavLink to="/WhyCitk" exact className="activeclass">
                    Media
                  </NavLink>
                  <NavLink
                    to="/demographics"
                    exact
                    className="activeclass"
                  >
                    Our gallery
                  </NavLink>
                  <NavLink to="/techclubs" exact className="activeclass">
                    Partner
                  </NavLink>
                </div>
              </li>

            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Toolbar;

