import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ArticleExcerpt } from "../components/ArticleExcerpt"
import { Meetup } from "../components/Meetup"

const SubHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
`

class BlogIndex extends React.Component<any> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Top"
          keywords={[`typescript`, `meetup`, `community`, `connpass`]}
        />
        <SubHeading>Upcoming events</SubHeading>
        {/* FIXME: ここハードコードせずにconnpassと連動させたい... */}
        <Meetup
          url="https://typescript-jp.connpass.com/event/135033/"
          title="TypeScript Meetup #2"
          venue="株式会社 FiNC Technologies"
          heldOn={new Date(2019, 6, 10, 19, 30)}
        />

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
  }
`
