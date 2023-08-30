import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
     
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
             POLICY
          </section>
          <section className="footer-info__returns">
            Returns Policy
            <br />
            Delivery
            <br/>
            Security
            <br/>
            Privacy
          </section>        
        </section>
        <section className="footer-info-center">
          <Link to="/about">
          <section className="footer-info__email signup-color">
          ABOUT US
          </section>
          </Link>
          <section className="footer-info__terms">
          Address: Institute for Advanced Computing & Software Development,
          Dr. D.Y. Patil Educational Complex,
          Sector 29, Behind Akurdi Railway Station,
          Nigdi Pradhikaran, Akurdi
          Pune - 411044.
            <br />
            <br />
            <br />
            ©2023 AgroFavor Online Services Pvt Ltd, All rights reserved
            <br/>
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
           Follows Us On 
          </section>
          <section className="footer-info__contact">
            WhatsApp
            <br />
            Facebook
            <br/>
            Instagram
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;