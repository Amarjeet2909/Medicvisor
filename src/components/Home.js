import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Typed from 'typed.js';
import poster from "../assets/images/poster.jpg";
import "./Styles/Home.css";
import ambulance from "../assets/images/ambulance.png"
import nurse from "../assets/images/nurse.png";
import medicalcheckup from "../assets/images/medicalcheckup.png";
import FullBody from "../assets/images/FullBody.png";
import introPoster from "../assets/images/introPoster.jpg";
import Twenty4by7 from "../assets/Icons/247.gif";
import Professional from "../assets/Icons/professional.gif";
import Emergency from "../assets/Icons/emergency.gif";
import TrustedDoctor from "../assets/Icons/doctors.gif";

const Home = () => {

      useEffect(() => {
        // Configuration for the Typed instance
        const options = {
          strings: ["Ambulace Booking", "Diagnostic", "Home Nursing", "and more"],
          cursorColor: 'Red',
          typeSpeed: 100,
          loop: true,
        };
      
        // Target the element with the "typing" class
        const targetElement = document.querySelector(".service");
      
        if (targetElement) {
          // Create a new Typed instance
          const typed = new Typed(targetElement, options);
      
          // Cleanup on unmount
          return () => {
            typed.destroy();
          };
        }
      }, []);


        const boxSectionRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                entry.target.classList.add("animate"); // Add animate class if the target is in viewport
                }
            });
            });

            if (boxSectionRef.current) {
            observer.observe(boxSectionRef.current);
            }

            // Cleanup observer on unmount
            return () => {
            if (boxSectionRef.current) {
                observer.unobserve(boxSectionRef.current);
            }
            };
        }, []);

        useEffect(() => {
            const heading = document.querySelector(".Serviceheading");
        
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                  }
                });
              },
              { threshold: 0.5 }
            );
        
            if (heading) {
              observer.observe(heading);
            }
        
            return () => {
              if (heading) {
                observer.unobserve(heading);
              }
            };
          }, []);

    const whatsappNumber = "9264198199";

    const openWhatsappChat = () => {
        const defaultMessage = "Hi Hanuman";
        const encodedMessage = encodeURIComponent(defaultMessage);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    };
    

    const [isCallDrawerOpen, setIsCallDrawerOpen] = useState(false);
    const [isMailDrawerOpen, setIsMailDrawerOpen] = useState(false);

    const toggleCallDrawer = () => {
        setIsCallDrawerOpen(!isCallDrawerOpen);
        setIsMailDrawerOpen(false); // Close mail drawer if open
    };

    const toggleMailDrawer = () => {
        setIsMailDrawerOpen(!isMailDrawerOpen);
        setIsCallDrawerOpen(false); // Close call drawer if open
    };

    return (
        <div className="home">
            <div className="homeBannerSection">
                <div className="videoWrapper">
                <img src={poster} className="video">
                    </img>
                    <div className="headingWrapper">
                        <h1 className="heading">Health Accessible in Need and Utility for MANkind</h1>
                        <h2 className="subHeading"><span class="service"></span></h2>
                    </div>
                    <div className="drawerWrapper">
                        <div className={`drawer ${isCallDrawerOpen ? "open" : ""}`}>
                            <div className="drawerHandle callHandle" onMouseEnter={toggleCallDrawer} onMouseLeave={toggleCallDrawer}>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <a href="tel:9264198199"><div className="drawerContent">
                                <FontAwesomeIcon icon={faPhone} />
                                <span>Call on 9264198199</span>
                            </div></a>
                        </div>
                        <div className={`drawer ${isMailDrawerOpen ? "open" : ""}`}>
                            <div className="drawerHandle mailHandle" onMouseEnter={toggleMailDrawer} onMouseLeave={toggleMailDrawer}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </div>
                            <div className="drawerContent" onClick={openWhatsappChat}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                                <span>Whatsapp 9264198199</span>
                            </div>
                        </div>
                        <div className={`drawer ${isMailDrawerOpen ? "open" : ""}`}>
                            <div className="drawerHandle mailHandle" onMouseEnter={toggleMailDrawer} onMouseLeave={toggleMailDrawer}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <a href="mailto:contact@hanumaan.in"><div className="drawerContent">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>contact@hanumaan.in</span>
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;
