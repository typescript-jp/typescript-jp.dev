import styled from "styled-components"
import media from "styled-media-query"
import { rhythm } from "../utils/typography"

export const HeadGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rhythm(1)};
  ${media.lessThan("small")`
    display: block;
  `}
`

export const FootGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${rhythm(1)};
  ${media.lessThan("small")`
    display: block;
  `}
`

export const PublishedDate = styled.time`
  display: block;
  padding: ${rhythm(0.6)};
  line-height: 1;
  color: ${({ theme }) => theme.colors.base};
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: Montserrat, sans-serif;
  font-weight: 900;
  > .year {
    display: block;
    font-size: ${rhythm(0.6)};
    margin-bottom: 0.5em;
  }
  > .date {
    font-size: ${rhythm(1.2)};
  }
  ${media.lessThan("small")`
    display: inline-block;
    margin-bottom: .5em;
    padding: .5em;
    > .year, > .date {
      display: inline;
      margin-right: .5em;
      font-size: ${rhythm(0.5)};
    }
  `}
`

export const Title = styled.h2`
  margin-left: ${rhythm(1)};
  ${media.lessThan("small")`
  margin-left: 0;
  `}
`

// https://murashun.jp/blog/20170716-01.html
export const Body = styled.div`
  color: ${({ theme }) => theme.colors.text};
  > h2 {
    padding: ${rhythm(1)} 0;
  }
`
