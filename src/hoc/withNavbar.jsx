import React from "react";
import Nav from "../elements/Navbar";

const withNavbar = (WrappedComponent) => {
  return function WithNavbar(props) {
    return (
      <>
        <Nav />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withNavbar;
