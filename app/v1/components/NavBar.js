import React from "react";
import Nav from "./homeutils/Nav";
import Support from "./homeutils/Support";
import Footer from "./homeutils/Footer";
import Pro from "./homeutils/Pro";
import Trending from "./homeutils/Trending";
import Alert from "./homeutils/Alert";


const Header = () => {
  return (
    <>
  <Nav />
  <Alert />
  <Trending />
<Pro />
  <Support />
<Footer />

    </>
  );
};

export default Header;
