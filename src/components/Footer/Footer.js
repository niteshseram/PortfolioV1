import React from "react";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { FooterContainer, SocialLinks } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Designed & Built by Nitesh Seram</p>
      <SocialLinks>
        <a href="https://github.com/niteshseram" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/niteshseram" target="_blank">
          <FaLinkedin />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
