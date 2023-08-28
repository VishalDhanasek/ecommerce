import {useNavigate} from 'react-router-dom';
import NavigationBar from '../../components/common/NavigationBar';
import "././home.css";
import Card from '../../components/buyer/Card';
import cardData from '../../components/buyer/CardData';
import Footer from '../../components/common/Footer';
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useRef} from "react";
import {fetchProduct, setSelectedCategory} from "../../features/productSlice";
import {Overlay, Spinner} from "react-bootstrap";






export default function HomePage(){
  const allProductList = useSelector(state => state.product.allProductList)
  const token = useSelector(state => state.user.token)
    const fetchProductInProcess = useSelector(state => state.product.fetchProductInProcess)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() =>{
      dispatch(fetchProduct({token:token}))
  },[])

  async function handleCategorySelect(category) {
    console.log("Clicked--handleCategorySelect");
    await dispatch(setSelectedCategory({category: category}))
    navigate("/category")
  }

    const loadingOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 9999,
    };
    const featuredProductsSectionRef = useRef(null);
    const handleShopNowClick = () => {
      featuredProductsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
return(
        <div className='home'>
          
            <NavigationBar/>

        
        <div className='home1'>
          <div className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#1c2331"}}>
            <div className="container-fluid justify-content-center">
              
           <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav justify-content-between w-100">
                <li className="nav-item ">
                
                <span className="nav-link" onClick={() => handleCategorySelect('Fashion')} style={{cursor:"pointer"}}>Fashion</span>
                </li>
                <li className="nav-item">
                <span  onClick={() => handleCategorySelect('Mobile')} style={{cursor:"pointer"}} className="nav-link">Mobile Phones</span>
                </li>
                <li className="nav-item">
                  
                <span className="nav-link" onClick={() => handleCategorySelect('Camera')} style={{cursor:"pointer"}}>Camera</span>
                </li>
                <li className="nav-item">
                  
                  <span className="nav-link" onClick={() => handleCategorySelect('Skincare')} style={{cursor:"pointer"}}>Skin Care</span>
                </li>
                <li className="nav-item">
                  
                <span className="nav-link" onClick={() => handleCategorySelect('Footware')} style={{cursor:"pointer"}}>Footware</span>
                </li>
                <li className="nav-item">
                  
                <span className="nav-link" onClick={() => handleCategorySelect('Backpack')} style={{cursor:"pointer"}}>Backpack</span>
                </li>
                <li className="nav-item">
                  
                <span className="nav-link" onClick={() => handleCategorySelect('Laptop')} style={{cursor:"pointer"}}>Laptop</span>
                </li>
        
              </ul>
           </div>
             </div>
          </div>
          </div>


          
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={require('../../assets/banner-1.jpg')} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={require('../../assets/banner2.jpg')} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={require('../../assets/banner-1.jpg')} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>







          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span> 








          <section ref={featuredProductsSectionRef} class="container">
    <h2 class="text-center mb-4">Featured Products</h2>
    <div class="row">

        {fetchProductInProcess ?
            <div style={loadingOverlayStyle}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>:
            <Card ProductList={allProductList}/>
        }

    </div>
    
    
  </section><br/>

  <Footer/>

  
                
                
        </div>
        
        
        
        







    )

}