import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FancyParagraph from "../components/fancy-paragraph"

const AboutPage = () => (
    <Layout>
     <h1>About Me</h1>
     <FancyParagraph paragraphText="Styled with CSS Modules." />
    </Layout>
    )

export default AboutPage