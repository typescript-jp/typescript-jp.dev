import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"
import { ExternalLink } from "./ExternalLink"

type Props = {
  title: string
  venue: string
  url: string
  heldOn: Date
}

const Title = styled.h3``

const PublishedDate = styled.time`
  display: block;
`

const Venue = styled.span`
  display: block;
`

export function Meetup(props: Props) {
  const { title, url, venue, heldOn } = props
  const formatter = new Intl.DateTimeFormat(navigator.language, {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div>
      <ExternalLink href={url}>
        <Title
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          {title}
        </Title>
      </ExternalLink>
      <PublishedDate
        dateTime={heldOn.toISOString()}
        style={{
          ...scale(-1 / 5),
        }}
      >
        {formatter.format(heldOn)}
      </PublishedDate>
      <Venue>{venue}</Venue>
    </div>
  )
}
