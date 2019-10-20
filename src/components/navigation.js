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
import ScrollchorItem from "./scrollchor-item";
import Scrollspy from "react-scrollspy";
import "./navigation.css";
import { Link } from 'gatsby'

class Navigation extends Component {

  render() {

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
            <Link to="/blog/">
                Blog
              </Link>
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
