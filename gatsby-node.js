/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
// Log out information after a build is done

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/pages/{mdx.slug}.js`)
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              slug
            }
            id
          }
        }
      }
    }
  `)
  result.data.allMdx.edges.forEach(edge => {
    createPage({
      path: `${edge.node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        id: edge.node.id,
        title: edge.node.title,
      },
    })
  })
}
