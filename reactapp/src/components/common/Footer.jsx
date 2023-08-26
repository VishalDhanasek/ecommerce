import React from "react";
import "../../pages/buyer/home.css"

import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaMapMarkerAlt, FaMailBulk, FaPhoneAlt } from "react-icons/fa";



const Footer = () => {
    return(
        <>
<section>
  



  
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >
  
    <section
             className="d-flex justify-content-between p-4 bg-danger"
             style={{backgroundColor: "#f25151"}}
             >
      
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
    
      <div>
        <a href="" className="text-white me-4">
          <FaFacebookF/>
        </a>
        <a href="" className="text-white me-4">
          <FaInstagram/>
        </a>
        <a href="" className="text-white me-4">
          <FaLinkedin/>
        </a>
        <a href="" className="text-white me-4">
          <FaGithub/>
        </a>
        <a href="" className="text-white me-4">
          <FaDiscord/>
        </a>
      </div>
     
    </section>
    

    <section className="">
      <div className="container text-center text-md-start mt-5">
       
        <div className="row mt-3">
          
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <img src={require("../../assets/logo.png")} alt=" " width="120" height="41" className="d-inline-block align-text-top" />

            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                
                />
            <p className="py-4">
            Your Ultimate Destination for Online Retail Therapy!
            </p>
          </div>
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold text-danger">Company</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                
                />
            <p>
              <a href="#!" className="text-white">About Us</a>
            </p>
            <p>
              <a href="#!" className="text-white">Customer Care</a>
            </p>
            <p>
              <a href="#!" className="text-white">Careers</a>
            </p>
            <p>
              <a href="#!" className="text-white">Our Team</a>
            </p>
          </div>
          

         
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold text-danger">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
               
                />
            <p>
              <a href="#!" className="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-white">Help</a>
            </p>
          </div>
          

          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold text-danger">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
               
                />
            <p><FaMapMarkerAlt/>       Coimbatore, India</p>
            <p><FaMailBulk />          info@zest.com</p>
            <p><FaPhoneAlt />    +91 96290 18823</p>

          </div>
          
        </div>
        
      </div>
    </section>
    

    
    <div
         className="text-center p-3"
       
         >
      © 2023 Copyright: 
      <a className="text-white" href="#"
         > zest.com</a
        >
    </div>
    
  </footer>
  



 
</section>



        </>

    )
};
export default Footer;