import React from "react"
import styled from "styled-components"
import { Link as _Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { Logo } from "./Logo"

type Props = {
  title: string
}

const LogoContainer = styled.div`
  display: flex;
  margin-right: ${rhythm(0.5)};
`
const Link = styled(_Link)`
  display: flex;
  align-items: center;
  box-shadow: none !important;
  text-decoration: none;
  color: inherit;
  margin-bottom: ${rhythm(1)};
`
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`

export function Banner(props: Props) {
  const { title } = props
  return (
    <Link to={`${__PATH_PREFIX__}/`}>
      <LogoContainer>
        <Logo size={48} />
      </LogoContainer>
      <Title
        style={{
          ...scale(1),
        }}
      >
        {title}
      </Title>
    </Link>
  )
}
