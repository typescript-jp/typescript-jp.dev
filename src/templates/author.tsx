import React from "react"
import { Link, graphql } from "gatsby"

export default function Author(props: any) {
  const { id, bio, twitter } = props.data.authorYaml
  const postNodes = props.data.allMarkedRemark.edges.postNodes
  return (
    <div>
      <div>
        <h2>{id}</h2>
        <a href={`https://twitter.com/${twitter}/`} target="_blank">
          {`@${twitter}`}
        </a>
        <p>
          <em>{bio}</em>
        </p>
      </div>
      <hr />
      <p>{`Posted by ${id}: `}</p>
      {postNodes.map((pn: any, idx: number) => {
        const { node } = pn
        const { post } = node
        return (
          <div key={post.id}>
            <a href={post.fields.slug}>{post.frontmatter.title}</a>
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query PostsByAuthorId($authorId: String!) {
    allMarkdownRemark(filter: { fields: { authorId: { eq: $authorId } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            author {
              id
            }
          }
          fields {
            authorId
            slug
          }
        }
      }
    }
    authorYaml(id: { eq: $authorId }) {
      id
      bio
      twitter
    }
  }
`
