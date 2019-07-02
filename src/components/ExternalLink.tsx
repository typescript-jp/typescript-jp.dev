import React from "react"
import styled from "styled-components"

type Props = {
  href: string
  children: React.ReactNode
}

const Link = styled.a``

export function ExternalLink(props: Props) {
  const { href, children } = props
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  )
}
