import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Space, Typography } from "antd"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()
const BlogPost = ({ data }) => {
  const {
    body,
    frontmatter: { date, title, cover },
  } = data.mdx
  return (
    <>
      <Space direction="vertical" size={35}>
        <Space direction="vertical" size={20}>
          <div>
            <span className="post-date">
              {new Date(date).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <Typography.Title level={1} type="secondary">
            {title}
          </Typography.Title>
        </Space>
        <GatsbyImage
          image={getImage(cover)}
          alt="title"
          className="post-banner"
        />
        <MDXRenderer>{body}</MDXRenderer>
      </Space>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        tags
        cover {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      body
    }
  }
`

export default BlogPost
