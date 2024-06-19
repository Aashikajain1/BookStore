import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-black " data-bs-theme="light ">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/"><img src="logo.png" alt="loading" style={{height:"50px"}} /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active text-warning" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-warning" to="/authors">Contact Us</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-warning" to="/logout">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-warning" to="/books">Shop</Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header