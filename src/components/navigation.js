import React, { Component } from "react";
import "./navigation.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from 'gatsby'

class Navigation extends Component {

  render() {

    return (
      <Navbar fixed={"top"} expand="md">
        <NavbarBrand href="/">
          Wouter
        </NavbarBrand>
          <Nav>
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
          </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
