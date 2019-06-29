import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

export const Page = styled.div`
  background-color: ${({ theme }) => theme.colors.base};
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(36)};
  padding: ${rhythm(1)} ${rhythm(1.6)} ${rhythm(1)};
`
