import React from 'react'
import style from './Nav.module.scss'
import { Link } from 'react-scroll'

export const Nav = () => {
	return (
		<div className={style.nav}>
			<Link
				to='main'
				spy={true}
				smooth={true}
				hashSpy={true}
				offset={0}
				duration={1000}
				delay={0}
				isDynamic={true}
				ignoreCancelEvents={false}
				spyThrottle={500}
			>
				Main
			</Link>
			<Link
				to='skills'
				spy={true}
				smooth={true}
				hashSpy={true}
				offset={0}
				duration={1000}
				delay={0}
				isDynamic={true}
				ignoreCancelEvents={false}
				spyThrottle={500}
			>
				Skills
			</Link>
			<Link
				to='projects'
				spy={true}
				smooth={true}
				hashSpy={true}
				offset={0}
				duration={1000}
				delay={0}
				isDynamic={true}
				ignoreCancelEvents={false}
				spyThrottle={500}
			>
				Projects
			</Link>
			<Link
				to='contacts'
				spy={true}
				smooth={true}
				hashSpy={true}
				offset={0}
				duration={1000}
				delay={0}
				isDynamic={true}
				ignoreCancelEvents={false}
				spyThrottle={500}
			>
				Contacts
			</Link>
		</div>
	)
}
