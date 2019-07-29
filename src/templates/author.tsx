import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticleExcerpts from "../components/ArticleExcerpts"
import AuthorListItem from "../components/AuthorListItem"

export default function Author(props: any) {
  const author = props.data.authorYaml
  const postNodes = props.data.allMarkdownRemark.edges
  return (
    <Layout title={name}>
      <AuthorListItem {...author} />
      <hr />
      <h3>{`Posted by ${author.name}`}</h3>
      <ArticleExcerpts posts={postNodes} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostsByAuthorId($authorId: String!) {
    allMarkdownRemark(filter: { fields: { authorId: { eq: $authorId } } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    authorYaml(id: { eq: $authorId }) {
      id
      github
      bio
      twitter
      name
    }
  }
`
