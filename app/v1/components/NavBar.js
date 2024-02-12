import React from "react";
import Nav from "./homeutils/Nav";
import Support from "./homeutils/Support";
import Footer from "./homeutils/Footer";
import Pro from "./homeutils/Pro";
import Trending from "./homeutils/Trending";


const Header = () => {
  return (
    <>
      <Nav />
      <Trending />
      <Pro />
      <Support />
      <Footer />

    </>
  );
};

export default Header;
