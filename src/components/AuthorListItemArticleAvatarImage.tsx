import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

type Props = {
  className?: string
  imageUrl: string
}

const View: React.FC<Props> = props => (
  <p className={props.className}>
    <img src={props.imageUrl} />
  </p>
)

const StyledView = styled(View)`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  overflow: hidden;
  margin: ${rhythm(1 / 2)};
`

export { StyledView as AuthorListItemArticleAvatarImage }
