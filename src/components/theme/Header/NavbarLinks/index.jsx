import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<a href="/me/">About Me</a>
		<a href="/creations/">My Creations</a>
		<a href="/content/">Content</a>


	</Wrapper>
)

export default NavbarLinks
