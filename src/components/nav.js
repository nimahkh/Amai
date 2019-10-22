import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import "./navigation.css";
import { Link } from 'gatsby'

class Navi extends Component {

  render() {
      const whiteBackground = this.state.hasScrolledDown
        ? "white-background navbar-border"
          : "";
      const fontColor = this.state.hasScrolledDown ? "blue-font" : "white-font";

    return (
      <Navbar className={whiteBackground} fixed={"top"} expand="md">
        <NavbarBrand href="/">
          Site
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

export default Navi;
