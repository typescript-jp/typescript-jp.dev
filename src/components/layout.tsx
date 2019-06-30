import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { Page } from "./Page"
import { Banner } from "./Banner"
import { Footer } from "./Footer"

const GlobalStyle = createGlobalStyle`
  html {
    background: ${({ theme }) => theme.colors.primary};
  }
`

class Layout extends React.Component<any> {
  render() {
    const { title, children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Page>
            <header>
              <Banner title={title} />
            </header>
            <main>{children}</main>
            <Footer />
          </Page>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
