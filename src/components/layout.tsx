import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./GlobalStyle"
import { theme } from "../theme"
import { rhythm } from "../utils/typography"
import { Page } from "./Page"
import { Banner } from "./Banner"
import { Footer } from "./Footer"

type Props = {
  className?: string
  title: string
}
const Layout: React.FC<Props> = props => (
  <ThemeProvider theme={theme}>
    <div className={props.className}>
      <GlobalStyle />
      <header>
        <Banner title={props.title} />
      </header>
      <Page>
        <main>{props.children}</main>
      </Page>
      <Footer />
    </div>
  </ThemeProvider>
)

const StyledLayout = styled(Layout)`
  > header {
    padding: 16px 0;
    background-color: #fff;
    > * {
      margin: 0 auto;
      max-width: ${rhythm(36)};
    }
  }
`

export default StyledLayout
