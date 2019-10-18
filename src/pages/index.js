import React from "react";
import { graphql } from 'gatsby'
import Cover from "../components/cover";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const HomePage = ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>Wouter</title>
      </Helmet>
      <Cover coverImg={data.coverImg} />
    </div>
  );
};

export default HomePage;
