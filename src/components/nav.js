import React, { Component } from "react";
import "./navigation.css";
import { Link } from 'gatsby'

class Navi extends Component {

  render() {

    return (
      <nav id="navigation">
        <a href="#" class="logo">Jan Czizikow</a>
        <a aria-label="mobile menu" class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </a>
          <ul class="menu-left">
            <li><a href="/blog">Blog</a></li>
            <li><a href="#exp">Resume</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
      </nav>
    );
  }
}

export default Navi;
