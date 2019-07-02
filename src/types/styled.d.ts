// https://www.styled-components.com/docs/api#typescript
import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      base: string
      text: string
      link: string
      divider: string
    }
  }
}
