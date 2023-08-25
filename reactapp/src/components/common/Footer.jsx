import React from "react";
import "../../pages/buyer/home.css"

import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";



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
            
            <h6 className="text-uppercase fw-bold">Company name</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold text-danger">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                
                />
            <p>
              <a href="#!" className="text-white">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="text-white">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="text-white">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-white">Bootstrap Angular</a>
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
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
        
      </div>
    </section>
    

    
    <div
         className="text-center p-3"
       
         >
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a
        >
    </div>
    
  </footer>
  



 
</section>



        </>

    )
};
export default Footer;