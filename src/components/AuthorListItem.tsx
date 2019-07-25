import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

type Author = {
  id: string
  name: string
  bio: string
  twitter: string
  avatar: {
    childImageSharp: {
      fixed: any
    }
  }
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: medium solid ${props => props.theme.colors.divider};
  margin-bottom: 8px;
`

const LeftContainer = styled.div`
  flex: 1;
`
const RightContainer = styled.div``

export default function AuthorListItem(props: Author) {
  const { id, twitter, bio, avatar } = props

  return (
    <Container key={id}>
      <LeftContainer>
        <Link to={`author/${id}`}>
          <h1>{id}</h1>
          <h3>{bio}</h3>
        </Link>
      </LeftContainer>
      <RightContainer>
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={id}
          style={{
            margin: rhythm(1 / 2),
            minWidth: 50,
          }}
        />
      </RightContainer>
    </Container>
  )
}
