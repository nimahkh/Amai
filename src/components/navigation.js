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
      <Navbar fixed={"top"} expand="md">
        <NavbarBrand href="/" className={fontColor}>
          Wouter
        </NavbarBrand>
          <Scrollspy
            items={["about", "blog", "contact"]}
            currentClassName="active"
            navbar
          >
            <NavItem>
              <ScrollchorItem to="#about" className="nav-link">
                Over mij
              </ScrollchorItem>
            </NavItem>
            <NavItem>
            <Link to="/blog/">
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <ScrollchorItem to="#contact" className="nav-link">
                Contact
              </ScrollchorItem>
            </NavItem>
          </Scrollspy>
      </Navbar>
    );
  }
}

export default Navigation;
