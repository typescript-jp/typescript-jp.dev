import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { Copyright } from "./Copyright"
import { ExternalLink } from "./ExternalLink"

const Container = styled.footer`
  padding-top: ${rhythm(1)};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`

const LinksContainer = styled.footer`
  display: flex;
  justify-content: center;
`

const LinkDivider = styled.span`
  color: ${({ theme }) => theme.colors.divider};
  margin: 0 ${rhythm(0.2)};
`

const CopyrightContainer = styled.footer`
  display: flex;
  justify-content: center;
`

export function Footer() {
  return (
    <Container>
      <LinksContainer>
        <ExternalLink href="https://typescript-jp.connpass.com">
          Connpass
        </ExternalLink>
        <LinkDivider>/</LinkDivider>
        <ExternalLink href="https://twitter.com/typescriptjp">
          Twitter
        </ExternalLink>
        <LinkDivider>/</LinkDivider>
        <Link to="">Code of Conduct(TBA)</Link>
      </LinksContainer>
      <CopyrightContainer>
        <Copyright />
      </CopyrightContainer>
    </Container>
  )
}
