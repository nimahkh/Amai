import React from "react";
import { graphql } from 'gatsby'
import Cover from "../components/cover";
import Navigation from '../components/navigation'
import { Helmet } from "react-helmet";
import favicon from "../static/logo/favicon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const HomePage = ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>Sitee</title>
        <link rel="icon" type="/image/png" href={favicon} />
      </Helmet>
      <Cover coverImg={data.coverImg} />
      <Navigation />
    </div>
  );
};

export default HomePage;

export const query = graphql`
  query allImgsQuery {

    coverImg: imageSharp(original: { src: { regex: "/background/"} }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
