import React, { Component } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Nav,
  NavItem
} from "reactstrap";
import "./navigation.css";

class Navi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolledDown: false,
      isOpen: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleCloseCollapse = this.handleCloseCollapse.bind(this);
  }

  handleScroll() {
    const bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let scrolledDownEnough = bodyScrollTop > 75 ? true : false;
    this.setState({
      hasScrolledDown: scrolledDownEnough
    });
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleCloseCollapse() {
    if (this.state.isOpen) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const whiteBackground = this.state.hasScrolledDown
      ? "white-background navbar-border"
      : "";
    const fontColor = this.state.hasScrolledDown ? "blue-font" : "white-font";

    return (
      <Navbar className={whiteBackground} fixed={"top"} expand="md">
        <NavbarBrand href="https://www.maribelduran.com/" className={fontColor}>
          Site
        </NavbarBrand>
            <NavItem onClick={this.handleCloseCollapse}>
                ABOUT ME
            </NavItem>
            <NavItem onClick={this.handleCloseCollapse}>
                PROJECTS
            </NavItem>
            <NavItem onClick={this.handleCloseCollapse}>
                CONTACT
            </NavItem>
            <NavItem onClick={this.handleCloseCollapse}>
              <NavLink
                href="https://medium.com/@maribelduran"
                target="_blank"
                className="external-link"
                rel="noopener noreferrer"
              >
                WRITING
              </NavLink>
            </NavItem>
      </Navbar>
    );
  }
}

export default Navi;
