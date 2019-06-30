import React from "react"
import styled from "styled-components"

const Text = styled.small`
  color: ${({ theme }) => theme.colors.text};
  font-family: Montserrat, sans-serif;
`

export function Copyright() {
  return <Text>&copy; 2019-{new Date().getFullYear()} TypeScript JP</Text>
}
