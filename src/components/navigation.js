import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import "./navigation.css";
import { Link } from 'gatsby'
import styled from "styled-components"
const Navbar = styled.section`
  justify-content: auto;

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
