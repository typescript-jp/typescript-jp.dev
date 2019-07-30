import { createGlobalStyle } from "styled-components"
import media from "styled-media-query"

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN",
      Meiryo, sans-serif;
  }
  html {
    ${media.lessThan("medium")`
      background: url(${require("../images/bg_sp.png")}) no-repeat center 80px;
      background-size: contain;
      background-color: ${({ theme }) => theme.colors.primary};
    `}
    ${media.greaterThan("medium")`
      background: url(${require("../images/bg_pc.png")}) no-repeat center 80px;
      background-size: contain;
      background-color: ${({ theme }) => theme.colors.primary};
    `}
  }
  h2, h3, h4, h5 {
    margin: 0;
    line-height: 1.6;
    font-family: Arial, Helvetica, sans-serif;
  }
  ul {
    margin-bottom: inherit;
    margin-left: inherit;
    padding: 1em;
  }
  ul li {
    margin-bottom: 0;
  }
`
