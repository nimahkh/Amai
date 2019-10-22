import React from "react";
import { graphql } from 'gatsby'
import Cover from "../components/cover";
import Navi from '../components/nav'
import { Helmet } from "react-helmet";
import favicon from "../static/logo/favicon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from 'react-icons/fa';
import "./index.css";

const HomePage = () => (
    <div>
      <Helmet>
        <title>Sitee</title>
        <link rel="icon" type="/image/png" href={favicon} />
      </Helmet>
      <Cover />
      <Navi />
    </div>
  );

export default HomePage;
