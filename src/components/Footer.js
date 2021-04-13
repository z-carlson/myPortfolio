import React from "react";
import GitHubLogo from "../images/GitHub-Mark-64px.png";
import CodePenLogo from "../images/codepen logo black.png";
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
        <img src={GitHubLogo} />
      </a>
      {/* <a href="">

      <img src={CodePenLogo} />
      </a> */}
      <a href="https://www.linkedin.com/in/carlsonzachary">
        <img src={LinkedInLogo} />
      </a>
    </FooterStyles>
  );
};

export default Footer;
