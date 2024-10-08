import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-black bg-gradient text-light '>
      <div className='d-flex flex-wrap justify-content-around'>
        <div className='d-flex flex-column nav justify-content-center'>
          <li className='nav-item'><Link className=" nav-link text-warning mt-3 mb-0 fs-5" to="/">Home</Link></li>
          <li className='nav-item'><Link className=" nav-link text-warning mt-3 mb-0 fs-5" to="/books">Shop</Link></li>
          <li className='nav-item'><Link className=" nav-link text-warning mt-3 mb-0 fs-5" to="/about">About</Link></li>
          <li className='nav-item'><Link className=" nav-link text-warning mt-3 mb-0 fs-5" to="/Contact">Contact Us</Link></li>
        </div>
        <div className='d-flex flex-column justify-content-around ms-5' style={{width:"300px"}}>
          <li className='d-flex flex-row m-3'><img alt="loading" className="text-warning mt-3  mb-0 fs-5 " style={{ width: "30px" }} src="/phone.png" /><a href="tel:7385122661" className='text-warning text-decoration-none m-3'>738512261</a></li>
          <li className='d-flex flex-row m-3'><img alt="loading" className="text-warning mt-3  mb-0 fs-5 " style={{ width: "30px" }} src="/email.png" /><a href="mailto:jainaashika1510@gmail.com" className='text-warning text-decoration-none m-3'>Bookstore@gmail.com</a></li>
          <li className='d-flex flex-row m-3'><img alt="loading" className="text-warning mt-3  mb-0 fs-5 " style={{ width: "30px" }} src="/map.png" /><a href="/contact" className='text-warning text-decoration-none m-3'> Police Nagar, Nagpur, Digdoh, Maharashtra 440016</a></li>
        </div>
        <div className='d-flex flex-column justify-content-around' style={{width:"300px"}}>
          <p className='text-warning fs-3 mx-5'>Know more</p>
          <p className='text-warning text-wrap mx-5'>At Bookstore, we bring stories to life.Our passion for books has connected readers and built a vibrant community. Visit us to discover your next great read!
          </p>
        </div>
        <div className='d-flex flex-column justify-content-around m-5'>
          <img src="logo.png" alt="Loading" className='m-3 crd' style={{ width: "200px", height: "100px", boxShadow: "0 0 10px light" }} />
          <div className='d-flex flex-wrap justify-content-between '>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class=" crd text-warning bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class=" crd text-warning bi bi-pinterest" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
            </svg></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class=" crd text-warning bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class=" crd text-warning bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
            </svg></a>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='text-center fs-5'>
        <small>All Rights Reserved &copy; Copyright, AashikaJain</small>
      </div>
    </footer>
  )
}
