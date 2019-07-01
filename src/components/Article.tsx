import React from "react"
import { ArticlePublishedDate } from "./ArticlePublishedDate"
import { HeadGroup, Title, Body } from "./ArticleStyle"

type Props = {
  title: string
  publishedAt: Date
  body: string
}

export const Article: React.FC<Props> = props => (
  <>
    <HeadGroup>
      <ArticlePublishedDate publishedAt={props.publishedAt} />
      <Title>{props.title}</Title>
    </HeadGroup>
    <Body
      dangerouslySetInnerHTML={{
        __html: props.body,
      }}
    />
  </>
)
