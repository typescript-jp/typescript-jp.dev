import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import ArticleExcerpt from "../components/ArticleExcerpt"
import { rhythm } from "../utils/typography"

type Node = {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    description?: string
  }
  excerpt: string
}
type Props = {
  className?: string
  posts: {
    node: Node
  }[]
}
const ArticleExcerpts: React.FC<Props> = props => (
  <div className={props.className}>
    {props.posts.map(({ node }: { node: Node }) => (
      <ArticleExcerpt
        key={node.fields.slug}
        title={node.frontmatter.title || node.fields.slug}
        slug={node.fields.slug}
        publishedAt={new Date(node.frontmatter.date)}
        body={node.frontmatter.description || node.excerpt}
      />
    ))}
  </div>
)
const StyledArticleExcerpts = styled(ArticleExcerpts)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  > * {
    width: 32%;
    margin: 0 0.5%;
  }
  ${media.lessThan("medium")`
    > * {
      width: inherit;
      margin: 0 0 ${rhythm(1)} 0;
    }
  `}
`
export default StyledArticleExcerpts
