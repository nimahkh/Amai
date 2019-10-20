import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
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
            <NavItem>
                Over mij
            </NavItem>
            <NavItem>
            <Link to="/blog/">
                Blog
              </Link>
            </NavItem>
            <NavItem>
                Contact
            </NavItem>
      </Navbar>
    );
  }
}

export default Navigation;
