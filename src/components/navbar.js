import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <span className="text-primary">SK</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeNavbar}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tech" onClick={closeNavbar}>
                Tech Stack
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeNavbar}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNavbar}>
                Contact
              </a>
            </li>
          </ul>
          <div className="d-lg-none my-3 text-center">
            <a
              href="/Resume.pdf"
              className="btn btn-primary btn-block w-100"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
          <div className="d-none d-lg-flex mx-3">
            <a
              href="/Resume.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <a
              href="https://github.com/SANTHOSHKUMAR392002"
              className="text-white me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/santhosh-kumar-k-80703a2a7/"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
