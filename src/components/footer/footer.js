import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top row align-items-center">
          <div className="col-md-6 footer-logo">
            <span className="logo">
              <span href="#home" style={{"cursor":"pointer"}}>SK</span>
            </span>
          </div>
          <div className="col-md-6 d-flex flex-column flex-md-row justify-content-md-around align-items-md-center footer-contact text-md-right text-center">
            <div className="contact-container">
              <p><i className="fas fa-phone-alt"></i> +91 9345708867</p>
              <p><i className="fas fa-envelope"></i> santhoshkumar392k2@gmail.com</p>
            </div>
  <div className="footer-icons d-flex justify-content-around mt-3 mt-md-0">
    <a href="https://github.com/SANTHOSHKUMAR392002" className="footer-icon mx-2"><i className="fab fa-github"></i></a>
    <a href="https://www.linkedin.com/in/santhosh-kumar-k-80703a2a7/"  className="footer-icon mx-2">
      <i className="fab fa-linkedin"></i>
    </a>
  </div>
</div>
    </div>
        <div className="footer-bottom text-center">
          <p> Designed and built by <a href="#home">santhosh kumar</a> <br></br>
          &copy; {new Date().getFullYear()} All Rights Reserved. 
          </p>
          <ul className="footer-nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#tech">My TechStack</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
