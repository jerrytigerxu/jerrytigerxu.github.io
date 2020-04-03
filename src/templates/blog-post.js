import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from '../components/common';
import { About } from '../components/new_stuff';
import { Header } from '../components/theme';
import styled from '@emotion/styled';



const Container = styled.div`
  h1, h2, h3 {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;

export default ({ data }) => {
  const post = data.markdownRemark
  var title = ""
  if (post.frontmatter) {
    title = post.frontmatter.title
  }


  {/* Taking the post html and replacing the GitHub links with links to the .md files*/}
  const text = post.html;
  const new_html = text.replace(/https:\/\/github.com\/jerrytigerxu\/Notes\/(tree|blob)\/master/g, "").replace(/.md/g, "/");





  return (
    <Layout>
      <SEO />
      <Header />
      <Container>
        <div>
          <h1>{ title }</h1>
          <div dangerouslySetInnerHTML={{__html: new_html }} />
        </div>
      </Container>
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
