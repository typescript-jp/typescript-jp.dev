import React from "react"

export default function AuthorsTemplates(props: any) {
  const authorNodes = props.data.allAuthorYaml.edges.authorNodes
  return (
    <div>
      {authorNodes.map((an: any, index: number) => {
        console.log(an)
        return <div key={`author-${author.id}`}>{author.id}</div>
      })}
    </div>
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
        }
      }
    }
  }
`
