import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ContactChannelStyles = styled.div`
  color: var(--textColorDark);
  border-radius: 7px;
  background: #f3f3f1;
  box-shadow: inset 6px 6px 12px #e7e7e5, inset -6px -6px 12px #fffffd;

  padding: 2rem 10rem;
  margin: 1rem 0;

  display: flex;
  justify-content: space-between;

  a {
    color: var(--textColorDark);
  }

  @media (max-width: 800px) {
    margin: 1rem 0;
    padding: 1rem;
  }
`;

const ContactPage = () => {
  return (
    <Layout>
      <main id="contact-page">
        <h1>Get in touch</h1>
        <ContactChannelStyles>
          <span>Email</span>
          <a href="mailto:connect@zachary-carlson.com?subject=Job Opportunity&body=Hi Zac, ">
            <span>connect@zachary-carlson.com</span>
          </a>
        </ContactChannelStyles>
        <ContactChannelStyles>
          <span>Github</span>
          <a href="https://github.com/z-carlson">
            <span>https://github.com/z-carlson</span>
          </a>
        </ContactChannelStyles>
        <ContactChannelStyles>
          <span>linkedin</span>
          <a href="https://www.linkedin.com/in/carlsonzachary">
            <span>linkedin.com/in/carlsonzachary</span>
          </a>
        </ContactChannelStyles>
      </main>
    </Layout>
  );
};

export default ContactPage;
