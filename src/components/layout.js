/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Footer from "./footer"
import "../styles/default.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            padding: "0 1rem",
          }}
        >
          <main>{children}</main>
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
