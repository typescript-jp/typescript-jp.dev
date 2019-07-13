import React from "react"
import { ArticlePublishedDate } from "./ArticlePublishedDate"
import { HeadGroup, Title, Body } from "./ArticleStyle"
import Bio from "./bio"

type Author = {
  id: string
  bio: string
  twitter: string
}

type Props = {
  title: string
  publishedAt: Date
  body: string
  author: Author
}

export const Article: React.FC<Props> = props => (
  <>
    <HeadGroup>
      <ArticlePublishedDate publishedAt={props.publishedAt} />
      <div>
        <Title>{props.title}</Title>
        <p>{props.author.id}</p>
        <Bio />
      </div>
    </HeadGroup>
    <Body
      dangerouslySetInnerHTML={{
        __html: props.body,
      }}
    />
  </>
)
