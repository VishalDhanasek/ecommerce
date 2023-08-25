import { ReactComponent as Landingpageimg } from '../../assets/Ecommerce web page-pana 1.svg';
import './LandingPage.css';
import { useState } from 'react';
import HeaderBar from '../../components/common/HeaderBar';
import Footer from '../../components/common/Footer';
import {useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from "react";
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import SignupForm from "../../components/common/SigninForm";
import SigninForm from "../../components/common/SigninForm";
import image from "../../assets/2.jpg"
import image1 from "../../assets/1.jpg"
import image3 from "../../assets/3.jpg"


export default function LandingPage() {

    const [signup, setSignup] = useState(false);
    const [signin, setSignin] = useState(false)
    console.log(signup)
    const handleOpenSignup = () => setSignup(true)
    const handleOpenSignin = () => setSignin(true);
    const handleCloseSignup = () => setSignup(false);
    const handleCloseSignin = () => setSignin(false);

    const navigate = useNavigate();
    const token = useSelector(state => state.user.token)
    const signinSuccess = useSelector(state => state.user.signinSuccess)
    const currentUser = useSelector(state => state.user.currentUser)
    console.log("success--landing")
    useEffect(() =>{
        if (token !== null) {
            console.log(currentUser)
            if (currentUser.roles === 'ROLE_ADMIN') {
                navigate("/admin/products");
            } else if (currentUser.roles === 'ROLE_SELLER') {
                console.log("success-seller")
                navigate("/seller/home");
            } else if (currentUser.roles === 'ROLE_BUYER') {
                navigate("/home");
            }
        }
    },[])
    if (signinSuccess) {
        console.log("success-login")
        console.log(currentUser)
        if(currentUser && currentUser.roles){
        if (currentUser.roles === 'ROLE_ADMIN') {
            navigate("/admin/products");
        } else if (currentUser.roles === 'ROLE_SELLER') {
            console.log("success-seller")
            navigate("/seller/home");
        } else if (currentUser.roles === 'ROLE_BUYER') {
            navigate("/home");
        }
    }
    }

    return (
        <div>
            <HeaderBar/>
            <div className="container-fluid">
                <div className="row">

                <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        
      <Tilt>
                <div>
      <img  src={require('../../assets/featured-image.png')} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        
      </img>
      </div>
    </Tilt>
      </div>
      <div class="col-lg-6">
        <h1 class="h1 fw-bold lh-1 mb-3">Zest: Where Shopping Dreams Come True</h1>
        <p class="lead">Discover a World of Exclusive Deals and Irresistible Finds at Your Fingertips - Your Ultimate Destination for Online Retail Therapy!</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">

          <button type="button" class="btn btn-danger btn-lg px-4 me-md-2 " onClick={() => { handleOpenSignup() }}>Get Started</button>
          
        </div>
        <SigninForm show={signin} onHide={handleCloseSignin} openSignup={handleOpenSignup}></SigninForm>
        <SignupForm show={signup} onHide={handleCloseSignup} openSignin={handleOpenSignin}></SignupForm>
            
      </div>
    </div>
  </div>            
                </div>
            </div>




            


            <section class="feature-two feature-dark bg-danger">
      <div className="container">
        <div className="feature-content">
          <div className="row">
            <div className="col-lg-6 feature-caption">
              <h6>Best Experience</h6>
              <h2 class="display-6 lh-1 fw-bold">Discover a World of Delightful Shopping</h2>
              <p className="lead">At ShopSavvy, we've curated a stunning array of products that cater to your unique tastes. From fashion to electronics, home decor to wellness, we're your one-stop shop for everything you desire.</p>
            </div>
            <div className="col-lg-6 text-sm-center d-none d-lg-block">
              <img src={require('../../assets/iphone1.png')} class="d-block mx-lg-auto img-fluid" alt="iphone" width="250" height="500"/>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="feature-three">
      <div className="container">
        <div className="feature-content">
          <div className="row">
            <div className="col-lg-6 text-sm-center d-none d-lg-block">
            <img src={require('../../assets/lady.png')} class="img-fluid" height="500" alt="iphone" />
            </div>
            <div className="col-lg-5 ml-lg-auto">
              <h6>The wow factor</h6>
              <h2 className="display-6 lh-1 fw-bold">Unbeatable Discounts Await You!</h2>
              <p className="lead">Browse through our range of products and enjoy discounts that make your shopping experience even more rewarding. From seasonal sales to bundle offers, we have something for everyone.</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section class="feature-two feature-dark bg-danger">
      <div className="container pt-6">
        <div className="feature-content">
          <div className="row">
            <div className="col-lg-6 feature-caption">
              <h6>Incredible products</h6>
              <h2 class="display-6 lh-1 fw-bold">Stay Ahead of the Curve!</h2>
              <p className="lead">Explore our handpicked selection of trending products. Be the first to own the latest gadgets, flaunt the freshest fashion, and adorn your surroundings with top-notch decor.</p>
            </div>
            <div className="col-lg-6 text-sm-center d-none d-lg-block">
            <img src={require('../../assets/laptop1.png')} class="img-fluid"  alt="iphone" />
            </div>
          </div>
        </div>
      </div>
    </section>



    <br/><br/><br/><br/><br/>




    <div className="container-fluid py-9">
                <div className="row">
                    
                        <p className="h2 text-center fw-bold "><b>Ultimate Shopping Bliss</b></p>
                    
                </div>
            </div>
            <div className='container'>          
                <div class="row d-flex justify-content-center">

                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-10 py-5 ">
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-8 shadow-lg" style={{backgroundImage: `url('${image1}')` , backgroundSize:"contain"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Free Shipping & Fast Delivery</h2>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url('${image}')` , backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">24 hrs Customer Support</h2>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url('${image3}')` , backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>

          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Huge Diversity in Products</h2>
          </div>
        </div>
      </div>
    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/>

            <Footer />
        </div>
    )
}
