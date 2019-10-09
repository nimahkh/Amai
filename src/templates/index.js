import React from 'react'
import { graphql } from 'gatsby'

/**
* Main Index page
*
*/
const Index = ({ data, location, pageContext }) => {

  ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

export default Index
