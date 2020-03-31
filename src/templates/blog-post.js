import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/common/Layout';

export default ({ data }) => {
  const post = data.markdownRemark
  var title = ""
  if (post.frontmatter) {
    title = post.frontmatter.title
  }
  return (
    <Layout>
      <div>
        <h1>{ title }</h1>
        <div dangerouslySetInnerHTML={{__html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
  `
