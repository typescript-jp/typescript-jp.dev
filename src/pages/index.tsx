import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleExcerpts from "../components/ArticleExcerpts"
import Meetups from "../components/Meetups"
import { rhythm } from "../utils/typography"

type FIXME_Event = any

const SubHeading = styled.h2`
  margin-bottom: ${rhythm(1.2)};
  font-family: Montserrat, sans-serif;
  font-weight: 900;
  font-size: ${rhythm(1.2)};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};
  ${media.lessThan("small")`
    font-size: ${rhythm(0.8)};
    margin-bottom: ${rhythm(0.8)};
  `}
`

class BlogIndex extends React.Component<any> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const events = data.allConnpassEvents.edges as FIXME_Event[]
    const upcommingEvents = events.filter(
      ({ node }) => new Date(node.started_at) > new Date()
    )
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout title={siteTitle}>
        <SEO
          title="Top"
          keywords={[`typescript`, `meetup`, `community`, `connpass`]}
        />
        <SubHeading>Upcoming events</SubHeading>
        <Meetups upcommingEvents={upcommingEvents} />
        <SubHeading>Articles</SubHeading>
        <ArticleExcerpts posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    # https://www.gatsbyjs.org/packages/gatsby-source-apiserver/?=gatsby-source-api#dummy-node
    allConnpassEvents(filter: { id: { ne: "dummy" } }) {
      edges {
        node {
          id
          title
          event_url
          started_at
          place
        }
      }
    }
  }
`
