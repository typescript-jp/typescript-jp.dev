import React from "react"
import styled from "styled-components"
import TSJP from "../assets/tsjp.svg"

type Props = {
  className?: string
  size: number
}

const View: React.FC<Props> = props => (
  <p className={props.className}>
    <TSJP />
  </p>
)

const StyledView = styled(View)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-bottom: 0;
  line-height: 0;
`

export { StyledView as Logo }
