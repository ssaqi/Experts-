import React from 'react'
import Image from 'next/image'
import Logo from '../public/images/Expert Logo web.png'
export default function Nav() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">
    <Image src={Logo}
     alt='logo' style={{ width: "120px", height: "40px" }} />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{fontWeight: "500"}}>
          <a className="nav-link active" aria-current="page" href="#">
          Become an expert
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
         Help
          </a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link ">
            Contact
            </a>
        </li>
    
      </ul>
      
    </div>
  </div>
</nav>

    
    
    </>
  )
}
