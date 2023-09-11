import React from 'react'
import { Link} from 'react-router-dom'

export default function Header() {
  return<> 
<nav className="navbar navbar-expand-lg bg-navbar text-light fixed-top">
  <div className="container ">
    <Link className="navbar-brand" to=""> <h1 className='text-light'>START FRAMEWORK</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="about"><h6 className='text-light fw-bold ps-4'>ABOUT</h6></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="portfolio"><h6 className='text-light fw-bold ps-4'>PORTFOLIO</h6></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact"><h6 className='text-light fw-bold ps-4'>CONTACT</h6></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}
