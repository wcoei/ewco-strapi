import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.strapiArticle
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.Subject}
        description={post.Content}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.Subject}</h1>
          <p>{post.createdAt}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.Content }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.Slug} rel="prev">
                ← {previous.Subject}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.Slug} rel="next">
                {next.Subject} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query StrApiBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    strapiArticle(Slug: {eq: $slug}) {
      id
      Slug
      Subject
      Content
      createdAt
    }
}
`
