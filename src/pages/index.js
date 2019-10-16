import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "seamless-bg-desktop.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <h1>Hello gatsby-background-image</h1>
          </BackgroundImage>
        )
      }}
    />
  )

  const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
  `

  export default StyledBackgroundSection

export default IndexPage
