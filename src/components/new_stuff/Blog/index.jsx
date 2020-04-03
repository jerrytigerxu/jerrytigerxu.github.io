import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/common'
import starIcon from 'assets/icons/star.svg'
import forkIcon from 'assets/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const Blog = () => (
  <div>
    <h1>This is the blog section</h1>
    <a href="/README/">Check out my blog</a>
  </div>
)
