import React, { Component } from "react";
import "./navigation.css";
import { Link } from 'gatsby'

class Navigation extends Component {

  render() {

    return (
      <navbar fixed={"top"} expand="md">
        <navbar-brand href="/">
          Wouter
        </navbar-brand>
            <nav-item>
                Over mij
            </nav-item>
            <nav-item>
            <Link to="/blog/">
                Blog
              </Link>
            </nav-item>
            <nav-item>
                Contact
            </nav-item>
      </navbar>
    );
  }
}

export default Navigation;
