import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Services from '../Services/Services.js';
import Bg from './bg.jpg'
import C1 from './c1.jpg'
import C2 from './c2.jpg'
import C3 from './c3.jpg'
function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url(${Bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // adjust height as needed
    boxShadow: 'inset 30px 30px 40px black',
};

  return (
    <div>
      <Header />
      <div className="mt-0 vw-100" style={backgroundImageStyle}>
        <br /><br /><br />
        <h3 className=" text-warning fs-1 ms-5 "><b>Welcome to the World Of Imagination! </b></h3>
        <h3 className="text-white fs-1 ms-5">Hold a conversation with the Author, </h3>
        <h3 className="text-white ms-5" >Get Lost in the Pages , Where Words Come to Life..</h3>
        <h3 className="text-white ms-5" >Discover, Dream, Dive In!!!</h3>
        <button className="btn btn-outline-light btn-lg ms-5 " ><a href="#box" className="nav-link active ">Explore</a></button>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide my-5 mx-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" style={{ backgroundSize: "cover", height: "450px" }}>
          <div className="carousel-item active">
            <img src={C1} className="d-block w-100" style={{ height: "450px" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={C2} className="d-block w-100" style={{ height: "450px" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src={C3} className="d-block w-100" style={{ height: "450px" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Services />
      <Footer />
    </div>
  )
}

export default Home;