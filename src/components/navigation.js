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
      <Navbar fixed={"top"} expand="md" style="justify-content:auto;">
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
