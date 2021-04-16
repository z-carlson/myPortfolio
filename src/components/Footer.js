import React from "react";
import GitHubLogo from "../images/GitHub-Mark-64px.png";
import LinkedInLogo from "../images/LI-In-Bug black.png";
import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  img {
    max-height: 50px;
    display: block;
    margin: 0 20px;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <a href="https://github.com/z-carlson">
        <img alt="github logo" src={GitHubLogo} />
      </a>

      <a href="https://www.linkedin.com/in/carlsonzachary">
        <img alt="LinkedIn logo" src={LinkedInLogo} />
      </a>
    </FooterStyles>
  );
};

export default Footer;
