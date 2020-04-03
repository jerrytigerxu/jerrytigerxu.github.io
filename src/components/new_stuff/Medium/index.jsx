import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/common'
import starIcon from 'assets/icons/star.svg'
import forkIcon from 'assets/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const Medium = () => {
  const {
      allFeedjeretigerxu: { edges },
  }
  = useStaticQuery(
    graphql`
      {
        allFeedjeretigerxu {
          edges {
            node {
              id
              link
              pubDate
              title
              creator
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper as={Container}>
      <h2>Top Medium Articles</h2>

      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as="a"
            href={node.link}
            target="_blank"
            rel="noopener noreferrer"
          >

          <h4>{node.title}</h4>

          </Item>
        ))}
      </Grid>




      <br />

    </Wrapper>
  )
}
