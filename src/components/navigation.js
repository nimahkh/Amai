import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Nav,
  NavItem
} from "reactstrap";
import Scrollspy from "react-scrollspy";
import "./navigation.css";

class Navigation extends Component {

  render() {
    return (
      <Navbar className={whiteBackground} fixed={"top"} expand="md">
        <NavbarBrand href="/" className={fontColor}>
          Wouter
        </NavbarBrand>
        <NavbarToggler>
          <i className={`fa fa-navicon ${fontColor}`} />
        </NavbarToggler>
        <Navbar>
            <NavItem>
              <ScrollchorItem to="#about" className="nav-link">
                Over mij
              </ScrollchorItem>
            </NavItem>
            <NavItem>
            <NavLink href="/blog/">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <ScrollchorItem to="#contact" className="nav-link">
                Contact
              </ScrollchorItem>
            </NavItem>
      </Navbar>
    );
  }
}

export default Navigation;
