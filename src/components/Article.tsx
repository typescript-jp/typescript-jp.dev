import React from "react"
import { ArticlePublishedDate } from "./ArticlePublishedDate"
import { HeadGroup, Title, Body } from "./ArticleStyle"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

type Author = {
  id: string
  name: string
  bio: string
  twitter: string
  avatar: {
    childImageSharp: {
      fixed: any
    }
  }
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
        <Image
          fixed={props.author.avatar.childImageSharp.fixed}
          alt={props.author.id}
          style={{
            marginLeft: rhythm(1 / 2),
            marginBottom: rhythm(1 / 1),
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>{props.author.name}</p>
      </div>
    </HeadGroup>
    <Body
      dangerouslySetInnerHTML={{
        __html: props.body,
      }}
    />
  </>
)
