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
    const whiteBackground = this.state.hasScrolledDown
      ? "white-background navbar-border"
      : "";
    const fontColor = this.state.hasScrolledDown ? "blue-font" : "white-font";

    return (
      <Navbar className={whiteBackground} fixed={"top"} expand="md">
        <NavbarBrand href="/" className={fontColor}>
          Wouter
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar}>
          <i className={`fa fa-navicon ${fontColor}`} />
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} className={`${fontColor}`} navbar>
          <Scrollspy
            items={["about", "blog", "contact"]}
            currentClassName="active"
            className={`${fontColor} ml-auto navbar-nav`}
            navbar
          >
            <NavItem onClick={this.handleCloseCollapse}>
              <ScrollchorItem to="#about" className="nav-link">
                Over mij
              </ScrollchorItem>
            </NavItem>
            <NavItem>
            <NavLink href="/blog/">
                Blog
              </NavLink>
            </NavItem>
            <NavItem onClick={this.handleCloseCollapse}>
              <ScrollchorItem to="#contact" className="nav-link">
                Contact
              </ScrollchorItem>
            </NavItem>
          </Scrollspy>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
