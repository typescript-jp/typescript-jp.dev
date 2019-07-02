import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { Meetup } from "../components/Meetup"
import { rhythm } from "../utils/typography"

type Props = {
  className?: string
  upcommingEvents: any[]
}
const Meetups: React.FC<Props> = props => (
  <div className={props.className}>
    {props.upcommingEvents.map(({ node: event }) => (
      <Meetup
        key={event.event_url}
        url={event.event_url}
        title={event.title}
        venue={event.place}
        heldOn={new Date(event.started_at)}
      />
    ))}
  </div>
)
const StyledMeetups = styled(Meetups)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  > * {
    width: 32%;
    margin-right: 1%;
    margin-bottom: ${rhythm(1)};
  }
  ${media.lessThan("medium")`
    > * {
      width: inherit;
      margin: 0 0 ${rhythm(1)} 0;
    }
  `}
`
export default StyledMeetups
