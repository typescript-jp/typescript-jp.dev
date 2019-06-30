import React from "react"
import styled from "styled-components"
import logo from "../../assets/tsjp.svg"

type Props = {
  size: number
}

const Img = styled.img`
  margin: 0;
`

export function Logo(props: Props) {
  const { size } = props
  return <Img src={logo} width={size} height={size} />
}
