import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

type Props = {
  title: string
  slug: string
  publishedAt: Date
  body: string
}

const Title = styled.h3``

const PublishedDate = styled.time`
  display: block;
`

// https://murashun.jp/blog/20170716-01.html
const Text = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN",
    Meiryo, sans-serif;
  color: ${({ theme }) => theme.colors.text};
`

export function ArticleExcerpt(props: Props) {
  const { title, slug, publishedAt, body } = props
  const formatter = new Intl.DateTimeFormat(navigator.language)
  return (
    <div>
      <Title
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link to={slug}>{title}</Link>
      </Title>
      <PublishedDate
        dateTime={publishedAt.toISOString()}
        style={{
          ...scale(-1 / 5),
        }}
      >
        {formatter.format(publishedAt)}
      </PublishedDate>
      <Text
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
    </div>
  )
}
