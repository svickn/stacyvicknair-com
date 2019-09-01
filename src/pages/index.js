import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Oh hello.</h1>
    <p>This site is currently a work in progress.</p>
    <p>Stick around and we'll see where we go!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/contact/">Contact me!</Link>
  </Layout>
)

export default IndexPage
