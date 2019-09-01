import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact me!</h1>
    <p>You can find me around...</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
