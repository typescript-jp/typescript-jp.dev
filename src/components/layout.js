import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { rhythm, scale } from "../utils/typography"

const GlobalStyle = createGlobalStyle`
  html {
    background: #ccc;
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }

    return (
      <ThemeProvider theme={{}}>
        <>
          <GlobalStyle />
          <div
            className={this.props.className}
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <header>{header}</header>
            <main>{children}</main>
            <footer>© {new Date().getFullYear()} TypeScript JP</footer>
          </div>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
