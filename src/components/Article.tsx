import React from "react"
import { ArticlePublishedDate } from "./ArticlePublishedDate"
import { HeadGroup, Title, Body } from "./ArticleStyle"
import { ArticleFootGroup } from "./ArticleFootGroup"

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

const View: React.FC<Props> = props => (
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
    <ArticleFootGroup
      title={props.title}
      publishedAt={props.publishedAt}
      body={props.body}
      author={props.author}
    />
  </>
)

export { View as Article }
