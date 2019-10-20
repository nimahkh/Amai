import React from "react";
import { graphql } from 'gatsby'
import Cover from "../components/cover";
import navigation from '../components/navigation'
import { Helmet } from "react-helmet";
import favicon from "../static/logo/favicon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const HomePage = ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>Wouter</title>
        <link rel="icon" type="/image/png" href={favicon} />
      </Helmet>
      <Cover coverImg={data.coverImg} />
      <Menu />
    </div>
  );
};

export default HomePage;

export const query = graphql`
  query allImgsQuery {

    coverImg: imageSharp(id: { regex: "/AirBalloon/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }

    profileImg: imageSharp(id: { regex: "/Maribel/" }) {
      sizes(maxWidth: 420, maxHeight: 630) {
        ...GatsbyImageSharpSizes
      }
    }

    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    HobbyImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/icons/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 40) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
