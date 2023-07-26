import React, { Component } from "react";
import ajit from './Profile1.jpg'
import chetan from './Profile2.jpg'
import kishor from './Profile3.jpg'
import vishal from './Profile4.jpg'
import abt from './abt.jpg'

const AboutScreen = (props) => {
              return (
          
                <div class="bg-light">
                  <div class="container">
                    <div class="row h-1 align-items-center">
                      <div class="row align-items-center mb-5">
                        <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                          <br />
                          <h2 class="font-weight-bold mt-5 mb-4"><i>ABOUT US</i></h2><hr/>
                          <p class="font-italic text-muted mb-4"> <b>Our Mission:</b><br/>
                            To design technology-driven solutions that make agricultural inputs more affordable and accessible for all.
                            We're developing the next generation of farmers by updating the methods and processes used throughout India, resulting in a more fruitful and lucrative industry.</p>

                          <p class="font-italic text-muted mb-4"> <b>Our Vision:</b><br/>
                            Our vision is to achieve sustainable growth within India’s agricultural industry by simplifying the everyday lives of farmers throughout the country. We aim to improve the quality of life for farmers throughout India by providing the technological infrastructure necessary to create the smarter future of farming.</p>
                           
                          <p class="font-italic text-muted mb-4"> <b>Our Story:</b><br/>                              
                            Our objective is, and always has been, to make farming materials more affordable and accessible - especially for those living in remote communities. We were founded on a dream to improve the quality of life for farmers in India, and a hope to make a sustainable and revolutionary change in the agriculture industry.
                            We want to drive fundamental change for farmers-and this begins with rethinking the existing methods of both production and delivery. We plan to democratize access to modern agricultural inputs-like equipment, fertilizer, pesticides, and seeds-thereby transforming the way the Indian agricultural industry functions and ultimately thrives.
                            We are innovative, tech-focused dreamers with a desire to be pioneers in this space. We want to drive innovation, make an impact, and become an inspiration. With a lot of hard work and a little bit of luck, we can achieve Vision 2022 and help Indian farmers earn twice of what they're earning today.</p>
                            <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>  
                        <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={abt} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                      </div>
                    </div>
                  </div>
          
                  <div class="bg-light py-5">
                    <div class="container">
                      <div class="row mb-4">
                        <div class="col-lg-5">
                          <h2 class="display-4 font-weight-italic">Our team:</h2>
                        </div>
                      </div>
          
                      <div class="row text-center">
          
                        <div class="col-xl-3 col-sm-6 mb-5">
                          <div class="bg-white rounded shadow-sm py-5 px-4"><img src={ajit} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Ajit Borugale</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                          </div>
                        </div>
          
                        <div class="col-xl-3 col-sm-6 mb-5">
                          <div class="bg-white rounded shadow-sm py-5 px-4"><img src={chetan} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Chetan Mohod</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                          </div>
                        </div>
          
                        <div class="col-xl-3 col-sm-6 mb-5">
                          <div class="bg-white rounded shadow-sm py-5 px-4"><img src={kishor} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Kishor Dalavi</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                          </div>
                        </div>
          
                        <div class="col-xl-3 col-sm-6 mb-5">
                          <div class="bg-white rounded shadow-sm py-5 px-4"><img src={vishal} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Vishal Chavan</h5><span class="small text-uppercase text-muted">CEO - Founder</span>      
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
export default AboutScreen