import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"
import { rhythm } from "../utils/typography"
import { DateLabel } from "./DateLabel"

type Props = {
  className?: string
  title: string
  slug: string
  publishedAt: Date
  body: string
}

export const ArticleExcerpt: React.FC<Props> = props => (
  <Link to={props.slug} className={props.className}>
    <p className="date">{DateLabel(props.publishedAt)}</p>
    <p className="title">{props.title}</p>
    <p className="body">{props.body}</p>
  </Link>
)

const StyledArticleExcerpt = styled(ArticleExcerpt)`
  padding: ${rhythm(1)};
  text-decoration: none;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  transition-duration: 0.2s;
  &:hover {
    text-decoration: none;
    box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.2);
  }
  ${media.lessThan("small")`
    padding: ${rhythm(0.5)};
  `}
  > .date {
    margin-bottom: 0;
    font-size: 0.8em;
  }
  > .title {
    font-size: 1.2em;
    font-weight: bolder;
  }
  > .body {
    font-size: 0.8em;
  }
`
export default StyledArticleExcerpt
