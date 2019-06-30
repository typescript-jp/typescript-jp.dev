import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

type Props = {
  title: string
  publishedAt: Date
  body: string
}

const Title = styled.h3``

const PublishedDate = styled.time`
  display: block;
  margin-bottom: ${rhythm(1)};
`

// https://murashun.jp/blog/20170716-01.html
const Text = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN",
    Meiryo, sans-serif;
  color: ${({ theme }) => theme.colors.text};
`

export function Article(props: Props) {
  const { title, publishedAt, body } = props
  const formatter = new Intl.DateTimeFormat(
    typeof navigator !== "undefined" ? navigator.language : "en"
  )
  return (
    <div>
      <Title
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        {title}
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
