import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import profile from 'assets/illustrations/profile.png'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const About = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={profile} alt="My face" />
      </Thumbnail>
      <Details>
        <h1>Who Am I?</h1>
        <p>
          My name is Jerry Xu. 
        </p>
        <p>
          I went to high school at John P. Stevens High School from 2012 to 2016, then I started college at Rutgers University - New Brunswick, joining the Business School. Currently, I am entering my senior year at Rutgers, double majoring in Business Analytics & Information Technology (BAIT) and Finance.
        </p>
        <p>
          I am a lover and follower of the Lord Jesus Christ. I was born into the church life and my faith has only gotten stronger. In college, I joined the Rutgers Christians on Campus club and became Treasurer in my sophomore year and then became president in my junior year.
        </p>
        <p>
          I have many varied interests, including: playing piano and guitar, creating multimedia visual art, coding, doing data analysis, playing basketball and frisbee and volleyball, reading, working out, hanging out with fellow believers and friends, and most importantly, constantly improving every facet of my being.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
