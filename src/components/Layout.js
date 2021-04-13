import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SEO from "./SEO";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
