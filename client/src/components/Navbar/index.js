import React, { useEffect, useState } from "react";
import Logo from "./images/icon_tutoring.png";
import "./styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-md navbar_inner_wrapper">
        <img src={Logo} className="logo" alt="my cartoon profile logo" />
        <div className="emptyDiv"></div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link two-words" href="/#aboutMeDiv">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#skills">
                Skills
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/#hobbies">
                Hobbies
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
            {/* <li className="nav-item active">
              <a className="nav-link two-words" href="/currentevents">
                Current Events
              </a>
            </li> */}
            {}
            <li className="nav-item">
              <a className="nav-link" href="/resume">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
