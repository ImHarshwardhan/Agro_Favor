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
            Address: Plot No. R/2, Market Yard Road, 
            Behind Hotel Fulora, Gultekdi, Pune, Maharashtra 411037
            <br />
            <br />
            <br />
            ©2021 GardenFever Online Services Pvt Ltd, All rights reserved
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