import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => (
  <div className="header__socials">
    <a href="https://www.linkedin.com/in/msmayank/" target="_blank">
      <BsLinkedin />
    </a>
    <a href="https://github.com/ms-mayank" target="_blank">
      <BsGithub />
    </a>
    <a href="https://www.youtube.com/channel/UCmefvzYXttYVHwyds4SITYw" target="_blank">
      <BsYoutube />
    </a>
  </div>
);

export default HeaderSocials;
