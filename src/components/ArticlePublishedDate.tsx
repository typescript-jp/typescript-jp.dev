import React from "react"
import { PublishedDate } from "./ArticleStyle"
import { DateLabel } from "./DateLabel"

type Props = {
  publishedAt: Date
}
export const ArticlePublishedDate: React.FC<Props> = props => {
  const [year, month, day] = DateLabel(props.publishedAt).split("/")
  return (
    <PublishedDate dateTime={props.publishedAt.toISOString()}>
      <span className="year">{year}</span>
      <span className="date">
        {month}.{day}
      </span>
    </PublishedDate>
  )
}
