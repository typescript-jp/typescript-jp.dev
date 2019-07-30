import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { AuthorListItemArticleAvatarImage } from "./AuthorListItemArticleAvatarImage"
import { LinkGithub } from "./LinkGithub"
import { LinkTwitter } from "./LinkTwitter"

type Props = {
  className?: string
  id: string
  name: string
  bio: string
  twitter: string
  github: string
}

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="description">
      <h1>{props.name}</h1>
      <h3>
        <em>{props.bio}</em>
      </h3>
      <div className="accounts">
        <LinkGithub id={props.github} size={32} color="#ccc" />
        <LinkTwitter id={props.twitter} size={32} color="#ccc" />
      </div>
    </div>
    <div className="avator">
      <AuthorListItemArticleAvatarImage
        imageUrl={`https://github.com/${props.id}.png`}
      />
    </div>
  </div>
)

const StyledView = styled(View)`
  ${media.greaterThan("medium")`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin-bottom: 0;
    }
    .description {
      flex: 1;
    }
  `}
  ${media.lessThan("medium")`
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    h1 {
      margin: 10px;
    }
    .description {
      text-align: center;
    }
  `}
  .accounts > * {
    margin: 10px;
  }
`

export default StyledView
