import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import "../components/Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import playstore from "../assets/images/playstore.png";
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";



export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
            <div className="social-links">
              <button className='social-btn' onClick={() => window.open('https://www.facebook.com/Hanumancare/', '_blank')}>
                <FontAwesomeIcon icon={faFacebookF} />
              </button>

              <button className='social-btn' onClick={() => window.open('https://twitter.com/CareHanuman', '_blank')}>
                <FontAwesomeIcon icon={faTwitter} />
              </button>

              <button className='social-btn' onClick={() => window.open('mailto:contact@hanumaan.in', '_blank')}>
                <FontAwesomeIcon icon={faEnvelope} />
              </button>

              <button className='social-btn' onClick={() => window.open('https://api.whatsapp.com/send?phone=919264198199', '_blank')}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </button>

              <button className='social-btn' onClick={() => window.open('https://www.linkedin.com/company/hanuman/', '_blank')}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>

              <button className='social-btn' onClick={() => window.open('https://www.youtube.com/channel/UC74jR2abOtyGe3h3NHmtFRw', '_blank')}>
                <FontAwesomeIcon icon={faYoutube} />
              </button>
            </div>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign in and don’t miss anything</strong>
                </p>
              </MDBCol>

              <MDBCol md='4' start>
                <MDBInput contrast type='email' placeholder='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
              <button type='submit' className='subscribe-btn mb-4'>
                Subscribe
              </button>
            </MDBCol>

            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p className='text-start'>
          Have questions or need assistance? Reach out to our friendly customer support team for prompt assistance. You can contact us via phone, email, or through our online inquiry form. Stay updated with the latest news and updates from Hanumancare by following us on social media.
          </p>
        </section>


        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <div className="contact-info-footer">
            <span><FontAwesomeIcon icon={faMapMarkerAlt} /> <a href="" className='text-white text-decoration-none custom-hover-green'>Bihar, India</a></span>
            <span><FontAwesomeIcon icon={faPhone} /> <a href="" className='text-white text-decoration-none custom-hover-green'>9264198199</a></span>
            <span><FontAwesomeIcon icon={faEnvelope} /> <a href="" className='text-white text-decoration-none custom-hover-green'>contact@hanumaan.in</a></span>
            <span><FontAwesomeIcon icon={faWhatsapp} /> <a href="" className='text-white text-decoration-none custom-hover-green'>9264198199</a></span>
            </div>
            <a href='https://play.google.com/store/apps/details?id=com.hanumaan.sanjeevani&hl=en_IN&gl=US' target='_blank'><img className='play' src={playstore}></img></a>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 text-start'>
            <h5 className='text-uppercase'>Service Cities</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Ambulance Service in Patna
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Ambulance Service in Delhi
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Ambulance Service in Noida
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Ambulance Service in Gurgaon
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Ambulance Service in Mumbai
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Ambulance Service in Ranchi
                </a>
              </li>
            </ul>
          </MDBCol>


          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 text-start'>
              <h5 className='text-uppercase'>Quick Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Partners
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Terms & Condition
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Refund Policy
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 text-start'>
              <h5 className='text-uppercase'>Services</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white text-decoration-none custom-hover-green text-start'>
                    Ambulance Services
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                    Nursing At Home
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Diagnostic at Home
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none custom-hover-green'>
                  Full Body Checkup
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © Copyright 2024 | All Right Reserved | Designed and Developed by MEDICVISOR PVT LTD
      </div>
    </MDBFooter>
  );
}