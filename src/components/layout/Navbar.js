import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
  };
  render() {
    return (
      <nav>
        <h1>
          <i className="fab fa-github" />
        </h1>
        Navbar
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
