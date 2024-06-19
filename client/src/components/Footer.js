import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
   <footer className='bg-black bg-gradient text-light '>
    <ul className='d-flex flex-wrap ms-5 nav justify-content-center'>
      <li className='nav-item'><Link className=" nav-link text-light mt-3 mb-0 fs-5"style={{paddingInline:"20px"}} to="posts/categories/:Agriculture">Agriculture</Link></li>
      <li className='nav-item'><Link className=" nav-link text-light mt-3 mb-0 fs-5"style={{paddingInline:"20px"}} to="posts/categories/:Bussiness">Bussiness</Link></li>
      <li className='nav-item'><Link className=" nav-link text-light mt-3 mb-0 fs-5"style={{paddingInline:"20px"}} to="posts/categories/:Eductaion">Eductaion</Link></li>
      <li className='nav-item'><Link className=" nav-link text-light mt-3 mb-0 fs-5"style={{paddingInline:"20px"}} to="posts/categories/:Enterainment">Enterainment</Link></li>
      <li className='nav-item'><Link className=" nav-link text-light mt-3 mb-0 fs-5"style={{paddingInline:"20px"}} to="posts/categories/:Art">Art</Link></li>
      <li className='nav-item'><Link className=" nav-link text-light mt-3 mb-0 fs-5"style={{paddingInline:"20px"}} to="posts/categories/:Investment">Investment</Link></li>
      <li className='nav-item'><Link className=" nav-link text-light mt-3 mb-0 fs-5"style={{paddingInline:"20px"}} to="posts/categories/:Uncategorized">Uncategorized</Link></li>
      <li className='nav-item'><Link className=" nav-link text-light mt-3 mb-0 fs-5"style={{paddingInline:"20px"}} to="posts/categories/:Weather">Weather</Link></li>
    </ul>
    <hr></hr>
    <div className='text-center fs-5'>
      <small>All Rights Reserved &copy; Copyright, AashiJain</small>
    </div>
   </footer>
  )
}
