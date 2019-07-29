import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

type Author = {
  id: string
  name: string
  bio: string
  twitter: string
  github: string
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LeftContainer = styled.div`
  flex: 1;
`
const RightContainer = styled.div``

const AvatarImage = styled.img`
  width: 200px;
  height: 200px;
  margin: ${rhythm(1 / 2)};
  min-width: 50;
`
export default function AuthorListItem(props: Author) {
  const { id, twitter, bio, github, name } = props
  const imageUrl = `https://github.com/${id}.png`

  return (
    <Container key={id}>
      <LeftContainer>
        <h1>{name}</h1>
        <h3>
          <em>{bio}</em>
        </h3>
        <p>
          <a href={`https://twitter.com/${twitter}/`} target="_blank">
            twitter
          </a>
          {` / `}
          <a href={`https://github.com/${github}/`} target="_blank">
            github
          </a>
        </p>
      </LeftContainer>
      <RightContainer>
        <AvatarImage src={imageUrl} />
      </RightContainer>
    </Container>
  )
}
