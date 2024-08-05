import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-black vw-100" data-bs-theme="light ">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/"><img src="logo.png" alt="loading" style={{height:"50px"}} /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation ">
          <span class="navbar-toggler-icon rounded" style={{marginRight:"80px",boxShadow:"0px 0px 7px white",position:"absolute",top:"10px",right:"30px",padding:"20px 20px"}}></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active text-warning" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-warning" to="/contact">Contact Us</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-warning" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-warning" to="/books">Shop</Link>
            </li>
          </ul>
          <form class="d-flex" style={{marginRight:"500px"}} role="search">
            <input class="form-control me-2 px-5" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header