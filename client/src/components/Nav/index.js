import React from "react";
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <a href="/donate">
              Donate
            </a>
          </li>
          <li className="mx-1">
            <a href="/create">
              Create Itinerary
            </a>
          </li>
          <li className="mx-1">
            <a href="/profile">
              Profile
            </a>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <a href="/donate">
              Donate
            </a>
          </li>
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }
  return (
    <header className="flex-row space-between px-1">
      <h1>
        <Link to="/">
          <img className='logo-img' alt="wanderpro-logo" src={require("./wanderpro_logo.png")}/>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
