import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
{/*import dev from 'assets/illustrations/skills.svg'*/}
import profile from 'assets/illustrations/profile-circle.png'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Profile = () => (
  <Wrapper id="profile">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={profile} alt="That's me you see!" />
      </Thumbnail>
      <Details>
        <h1>Hi! I'm Jere.</h1>
        <h3>I run FirstFruits Analytics.</h3>
        <p>
          I specialize in online growth engineering, utilizing tools in digital marketing and web analytics, as well as machine learning and application development.
        </p>
        <Button>
          <a href="/me/">
            Learn more about me
          </a>
        </Button>

      </Details>

    </SkillsWrapper>
  </Wrapper>
)
