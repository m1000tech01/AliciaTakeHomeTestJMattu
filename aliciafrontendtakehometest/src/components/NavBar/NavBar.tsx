import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Admin Table</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};

export default NavBar;
