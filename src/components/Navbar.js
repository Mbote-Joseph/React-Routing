import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className=" navbar">
      <Link to="/" className="link1">
        Home{" "}
      </Link>
      <Link to="/about" className="link2">
        About Us{" "}
      </Link>
      <Link to="/services" className="link3">
        Services{" "}
      </Link>
      <Link to="/contact" className="link4">
        Contact Us{" "}
      </Link>
    </div>
  );
}

export default Navbar;
