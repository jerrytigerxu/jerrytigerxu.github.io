import React from 'react';
import { Layout, SEO } from 'components/common';
import { graphql } from 'gatsby';
import { css } from "@emotion/core";



export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
              display: inline-block;
              border-bottom: 1px solid;
            `}
            >
            Testing
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>

            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
        }
      }
    }
  }
`
