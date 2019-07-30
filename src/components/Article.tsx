import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ArticlePublishedDate } from "./ArticlePublishedDate"
import { HeadGroup, Title, Body, FootGroup } from "./ArticleStyle"
import { ArticleAvatarImage } from "./ArticleAvatarImage"
import { rhythm } from "../utils/typography"
import AuthorListItem from "./AuthorListItem"

type Author = {
  id: string
  name: string
  bio: string
  twitter: string
  github: string
}

type Props = {
  title: string
  publishedAt: Date
  body: string
  author: Author
}

const AvatarImage = styled.img`
  width: 150px;
  height: 150px;
  margin: ${rhythm(1 / 2)};
  min-width: 50;
`

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Article: React.FC<Props> = props => {
  const { author } = props
  const { id, twitter, bio, github, name } = author
  const imageUrl = `https://github.com/${id}.png`
  return (
    <>
      <HeadGroup>
        <ArticlePublishedDate publishedAt={props.publishedAt} />
        <div>
          <Title>{props.title}</Title>
        </div>
      </HeadGroup>
      <Body
        dangerouslySetInnerHTML={{
          __html: props.body,
        }}
      />
      <hr />
      <Link to={`/author/${props.author.id}`}>
        <FootGroup>
          <ArticleAvatarImage imageUrl={imageUrl} />
          <Container>
            <h2>{author.name}</h2>
            <p>{author.bio}</p>
          </Container>
        </FootGroup>
      </Link>
    </>
  )
}
