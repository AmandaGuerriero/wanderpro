import React from "react";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <li className="navbar-brand">
        <Link to="/">
          Home
        </Link>
      </li>
    </nav>
  );
}

export default Nav;
