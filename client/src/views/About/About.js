import React from 'react';
import p2 from "./p3.jpeg";
import p3 from "./extra.gif";
import p4 from "./p4.jpg";
import p5 from "./p5.jpeg";
import p6 from "./p6.png";
import p7 from "./p7.jpeg";
import Header from '../../components/Header';
import Footer from "../../components/Footer.js"
const About = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid bg-dark text-white py-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className='text-warning text-center mb-4' style={{ color: '#ffcc00' }}>About Us</h2>
            <div className="text-center mb-4">
              <img
                src="./logo.png"
                alt="Bookstore Logo"
                className="img-fluid"
                style={{ maxWidth: '150px' }}
              />
            </div>
            <div className="mx-5 mb-5 mt-5 d-flex flex-wrap justify-content-around bg-dark">
              <div className=" text-white border-2 rounded mt-5 " style={{ height: "440px", width: "300px", boxShadow: "0px 0px 10px rgb(246, 206, 6)" }}>
                <h3 className="mt-3 text-center" style={{ color: '#ffcc00 ' }}>Welcome to Our Bookstore</h3>
                <h5 className='text-wrap mx-4' style={{ textAlign: "justify" }}>
                  Discover a world of books at our bookstore! From timeless classics to the latest bestsellers, we have something for every reader.
                  Our goal is to create a cozy environment where you can explore, relax, and find your next favorite read.
                </h5>
              </div>
              <div className=" text-white  border-2 rounded mt-5" style={{ height: "440px", width: "300px", boxShadow: "0px 0px 10px rgb(246, 206, 6)" }}>
                <h3 className="mt-3 text-center" style={{ color: '#ffcc00' }}>Our Mission</h3>
                <h5 className='text-wrap mx-4' style={{ textAlign: "justify" }}>
                  We aim to inspire a love of reading and provide a haven for book lovers. Our store is more than just a place to buy books; it’s a place to connect with fellow readers, attend events, and engage with the literary community.
                </h5>
              </div>
              <div className=" text-white  border-2 rounded mt-5" style={{ height: "440px", width: "300px", boxShadow: "0px 0px 10px rgb(246, 206, 6)" }}>
                <h3 className="mt-3 text-center" style={{ color: '#ffcc00' }}>Our Values</h3>
                <h5 className='text-wrap mx-4' style={{ textAlign: "justify" }}>
                  At our bookstore, we value community, knowledge, and the joy of reading. We strive to support local authors, foster a love for literature, and create a welcoming space for everyone.
                </h5>
              </div>
            </div>
            <div className='mx-5 mb-5 mt-5 border border-bottom-0 border border-warning'>
              <h2 className='text-warning text-center mt-4'>Our Team</h2>
            <div className=" d-flex flex-wrap justify-content-around rounded bg-dark ">
              <div className=" text-white border-2 rounded  " >
                <img className="rounded-top img-fluid px-5 " alt="loading" src={p4} style={{ height: "340px", width: "400px" }}  />
                <h2 className='text-light text-center mx-5 rounded-bottom' style={{boxShadow: "inset 0px 0px 10px rgb(246, 206, 6)" }} >Aashika Jain</h2>
              </div>
              <div className=" text-white border-2 rounded " >
                <img className="rounded-top img-fluid px-5" src={p5}ALT="LOADING" style={{ height: "340px", width: "400px" }} />
                <h2 className='text-light text-center mx-5 border border-bottom-0 border-warning' style={{boxShadow: "inset 0px 0px 10px rgb(246, 206, 6)" }} >Drishti Pawar</h2>
              </div>
              <div className=" text-white border-2 rounded  " >
                <img className="rounded-top img-fluid px-5 " alt="loading" src={p7} style={{ height: "340px", width: "400px" }}  />
                <h2 className='text-light text-center mx-5 rounded-bottom' style={{boxShadow: "inset 0px 0px 10px rgb(246, 206, 6)" }} >Aastha Gour</h2>
              </div>
              <div className=" text-white border-2 rounded  " >
                <img className="rounded-top img-fluid px-5 " alt="loading" src={p6} style={{ height: "340px", width: "400px" }}  />
                <h2 className='text-light text-center mx-5 rounded-bottom' style={{boxShadow: "inset 0px 0px 10px rgb(246, 206, 6)" }} >Anwesha Bajpayee</h2>
              </div>
            </div>
            </div>
            <div className='mx-5 mb-5 mt-5 d-flex rounded flex-wrap justify-content-around bg-dark'>
              <img src={p3} alt="loading" className='img-fluid'/>
              <div className='border-5 border border-warning'style={{width:"600px"}}>
                <h3 className="text-light text-wrap mx-5 my-5 ">
                  Have questions or feedback? We’d love to hear from you. Click below to get in touch with us.
                </h3>
            <div className="text-center mt-4">
              <a href="/contact" className="btn btn-outline-warning">Contact Us</a>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
