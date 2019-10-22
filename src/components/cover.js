import React from "react";
import Img from "gatsby-image";
import "./cover.css";

const Cover = () => (
  <div id="#top" className="cover">
    <div className="overlay" />
    <div className="center">
      <h1 className="name">
        <b>Site</b>
      </h1>
      <p className="greetings">Let's change the world together!</p>
    </div>
  </div>
);

export default Cover;
