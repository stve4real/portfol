import React from 'react';
import './Nav.css';
import 'bootstrap/js/dist/collapse'

function Nav() {
  return (
    <div className="container-fluid sticky-top bg-dark h-100 w-100">
      <nav className="navbar navbar-expand-md navbar-dark hv-100 w-100  bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Sylvester Sunday</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about"><span>01. </span>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services"><span>02. </span>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project"><span>03. </span>Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact"><span>04. </span>Contacts</a>
              </li>
              <li className="nav-item">
                <a className="btn bg-transparent" href="/Document/TCC%20USHERING.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;