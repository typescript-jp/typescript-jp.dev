import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"
import { ArticleAvatarImage } from "./ArticleAvatarImage"

type Author = {
  id: string
  name: string
  bio: string
  twitter: string
  github: string
}

type Props = {
  className?: string
  title: string
  publishedAt: Date
  body: string
  author: Author
}

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <ArticleAvatarImage
      imageUrl={`https://github.com/${props.author.id}.png`}
    />
    <div className="authorDescription">
      <Link to={`/author/${props.author.id}`}>
        <h2>{props.author.name}</h2>
        <p>{props.author.bio}</p>
      </Link>
    </div>
  </div>
)

const StyledView = styled(View)`
  margin: 20px 0;
  padding: 20px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  ${media.greaterThan("medium")`
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
  .authorDescription p {
    margin-bottom: 0;
  }
`

export { StyledView as ArticleFootGroup }
