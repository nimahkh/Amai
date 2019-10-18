import React from "react";
import Scrollchor from "react-scrollchor";
import Img from "gatsby-image";
import "./cover.css";

const Cover = ({ coverImg }) => (
  <div id="#top" className="cover animated">
    <Img
      title="Background image"
      alt="Gardens by the bay Singapore"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }}
    />
    <div className="overlay" />
    <div className="center">
      <h1 className="name">
        <b>Wouter</b>
      </h1>
      <p className="greetings">Let's change the world together!</p>
    </div>
  </div>
);

export default Cover;
