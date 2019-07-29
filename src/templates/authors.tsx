import React from "react"
import { graphql, Link } from "gatsby"
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
          return (
            <>
              <Link to={`/author/${an.node.id}`}>
                <AuthorListItem {...an.node} />
              </Link>
              <hr />
            </>
          )
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
          name
          github
          id
          bio
          twitter
        }
      }
    }
  }
`
