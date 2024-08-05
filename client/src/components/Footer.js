import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <footer className='bg-black bg-gradient text-light '>
    <div className='d-flex flex-wrap justify-content-between'>
    <div className='d-flex flex-column ms-5 nav justify-content-center'>
      <li className='nav-item'><Link className=" nav-link text-warning mt-3 mb-0 fs-5" to="/home">Home</Link></li>
      <li className='nav-item'><Link className=" nav-link text-warning mt-3 mb-0 fs-5" to="/books">Shop</Link></li>
      <li className='nav-item'><Link className=" nav-link text-warning mt-3 mb-0 fs-5" to="/about">About</Link></li>
      <li className='nav-item'><Link className=" nav-link text-warning mt-3 mb-0 fs-5" to="/Contact">Contact Us</Link></li>
    </div>
    <div className='d-flex flex-column ms-5 nav justify-content-center'>
      <li className='d-flex flex-row'><img className="text-warning mt-3  mb-0 fs-5 "style={{width:"30px"}} src="/phone.png"/><h4 className='text-warning m-3'>738512261</h4></li>
      <li className='d-flex flex-row'><img className="text-warning mt-3  mb-0 fs-5 "style={{width:"30px"}} src="/email.png"/><h4 className='text-warning m-3'>Bookstore@gamil.com</h4></li>
      <li className='d-flex flex-row'><img className="text-warning mt-3  mb-0 fs-5 "style={{width:"30px"}} src="/map.png"/><h4 className='text-warning m-3'> Police Nagar, Nagpur, Digdoh, Maharashtra 440016</h4></li>
    </div>
    
    <img src="logo.png" alt="Loading" className='m-5' style={{width:"300px",height:"300px",boxShadow:"0 0 10px light"}}/>
    </div>
    <hr></hr>
    <div className='text-center fs-5'>
      <small>All Rights Reserved &copy; Copyright, AashiJain</small>
    </div>
   </footer>
  )
}
