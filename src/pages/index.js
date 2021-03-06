import React from "react"
import { Col, Row, Space, Typography } from "antd"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image" // highlight-line

const IndexPage = ({ data }) => (
  <>
    <div className="title-separate">
      <Typography.Title level={2}>بلاگ</Typography.Title>
    </div>
    <Row gutter={[20, 20]}>
      {data.allMdx.nodes.map(node => (
        <Col lg={8} md={12} sm={12} xs={24} key={node.id}>
          <Link to={`/${node.frontmatter.slug}`}>
            <article>
              <GatsbyImage
                image={getImage(node.frontmatter.cover)}
                alt={node.frontmatter.title}
                className="post-cover"
              />
              <div className="post-info">
                <Space direction="vertical" size={12}>
                  <div>
                    <span className="post-date">
                      {new Date(node.frontmatter.date).toLocaleDateString(
                        "fa-IR",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                  <Typography.Title level={4} type="secondary">
                    {node.frontmatter.title}
                  </Typography.Title>
                  <p className="post-excerpt">{node.frontmatter.excerpt}</p>
                  <p className="post-tags">
                    {`#${node.frontmatter.tags.join(" #")}`}
                  </p>
                </Space>
              </div>
            </article>
          </Link>
        </Col>
      ))}
    </Row>
  </>
)

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          excerpt
          tags
          cover {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
        slug
      }
    }
  }
`

export default IndexPage
