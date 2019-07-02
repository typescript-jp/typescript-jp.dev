import styled from "styled-components"
import media from "styled-media-query"
import { rhythm } from "../utils/typography"

export const Page = styled.div`
  background-color: ${({ theme }) => theme.colors.base};
  margin: 0 auto;
  max-width: ${rhythm(38)};
  ${media.lessThan("medium")`
    margin-top: 20%;
    padding: ${rhythm(1)};
  `}
  ${media.greaterThan("medium")`
    margin-top: 16%;
    padding: ${rhythm(1.6)};
  `}
`
