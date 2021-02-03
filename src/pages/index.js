import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FancyParagraph from "../components/fancy-paragraph"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About</Link> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/contact/">Contact</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <div>
    <FancyParagraph paragraphText="C'est sympa comme endroit" />
    </div>
  </Layout>
)

export default IndexPage
