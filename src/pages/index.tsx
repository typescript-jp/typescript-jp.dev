import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ArticleExcerpt } from "../components/ArticleExcerpt"
import { Meetup } from "../components/Meetup"

type FIXME_Event = any

const SubHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
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
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Top"
          keywords={[`typescript`, `meetup`, `community`, `connpass`]}
        />
        <SubHeading>Upcoming events</SubHeading>
        {upcommingEvents.map(({ node: event }) => (
          <Meetup
            url={event.event_url}
            title={event.title}
            venue={event.place}
            heldOn={new Date(event.started_at)}
          />
        ))}

        <SubHeading>Articles</SubHeading>
        {posts.map(({ node }: { node: any }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <ArticleExcerpt
              key={node.fields.slug}
              title={title}
              slug={node.fields.slug}
              publishedAt={new Date(node.frontmatter.date)}
              body={node.frontmatter.description || node.excerpt}
            />
          )
        })}
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
