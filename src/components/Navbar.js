import React from "react";
import { Link } from "react-router-dom";
import "../style/main.scss";
import "../componentStyle/navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex jcsa">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="flex link jcs">
          <Link to="/">Login</Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
