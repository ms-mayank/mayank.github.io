import React from "react";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mayank Shukla
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/msmayank/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/ms-mayank">
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/channel/UCmefvzYXttYVHwyds4SITYw">
          <BsYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
