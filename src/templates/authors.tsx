import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import AuthorListItem from "../components/AuthorListItem"

export default function AuthorsTemplates(props: any) {
  const authorNodes = props.data.allAuthorYaml.edges
  return (
    <Layout title="Authors">
      <div>
        {authorNodes.map((an: any, index: number) => {
          return <AuthorListItem {...an.node} />
        })}
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query AuthorsQuery {
    allAuthorYaml {
      edges {
        node {
          id
          bio
          twitter
          avatar {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
