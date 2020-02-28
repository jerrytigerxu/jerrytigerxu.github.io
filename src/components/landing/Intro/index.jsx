import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
{/*import profile from 'assets/illustrations/profile.png'*/}
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'


export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Want to grow your online business & stay sane?</h1>
				<h4>Thankfully you found me.</h4>
				{/*<Button as={AnchorLink} href="#profile">
				</Button>*/}
			</Details>

		</IntroWrapper>
	</Wrapper>
)
