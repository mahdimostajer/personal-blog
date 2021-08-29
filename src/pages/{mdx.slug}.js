import React from "react"
import { Layout } from "antd"
import Header from "./../components/header"
import SEO from "../components/seo"
import Wrapper from "./../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPost = ({ data }) => {
  return (
    <Layout className="outer-layout">
      <Layout className="inner-layout">
        <Header />
        <SEO />
        <Wrapper>
          <p>{data.mdx.frontmatter.date}</p>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Wrapper>
      </Layout>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost
