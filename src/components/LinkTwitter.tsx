import React from "react"
import styled from "styled-components"
import Twitter from "../assets/twitter.svg"

type Props = {
  className?: string
  id: string
  size: number
  color?: string
}

const View: React.FC<Props> = props => (
  <p className={props.className}>
    <a
      href={`https://twitter.com/${props.id}/`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitter />
    </a>
  </p>
)

const StyledView = styled(View)`
  display: inline-block;
  overflow: hidden;
  a {
    display: inline-block;
    padding-bottom: -1px;
  }
  svg {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    line-height: 0;
  }
  path {
    fill: ${props => (props.color ? props.color : props.theme.colors.primary)};
  }
`

export { StyledView as LinkTwitter }
