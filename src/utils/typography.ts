import Typography from "typography"
// @ts-ignore Missing @types
import Wordpress2016 from "typography-theme-wordpress-2016"
import { theme } from "../theme"

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      color: theme.colors.link,
      boxShadow: "none",
    },
    "a:hover": {
      boxShadow: `0 1px 0 0 currentColor`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
