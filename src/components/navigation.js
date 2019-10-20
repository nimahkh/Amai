import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavLink,
  Nav,
  NavItem
} from "reactstrap";
import "./navigation.css";
import { Link } from 'gatsby'

class Navigation extends Component {

  render() {

    return (
      <Navbar fixed={"top"} expand="md">
        <NavbarBrand href="/">
          Wouter
        </NavbarBrand>
            <nav-link>
                Over mij
            </nav-link>
            <nav-link>
            <Link to="/blog/">
                Blog
              </Link>
            </nav-link>
            <nav-link>
                Contact
            </nav-link>
      </Navbar>
    );
  }
}

export default Navigation;
