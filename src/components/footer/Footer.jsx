import React from "react";
import "./footer.css";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
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
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://fb.com">
          <FiFacebook />
        </a>
        <a href="https://linkedin.com">
          <AiOutlineLinkedin />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
