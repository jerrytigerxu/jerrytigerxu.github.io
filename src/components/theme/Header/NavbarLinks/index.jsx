import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'
import { Link } from 'gatsby'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<Link to="/me/">About Me</Link>
		<Link to="/creations/">My Creations</Link>
		<Link to="/content/">Content</Link>


	</Wrapper>
)

export default NavbarLinks
