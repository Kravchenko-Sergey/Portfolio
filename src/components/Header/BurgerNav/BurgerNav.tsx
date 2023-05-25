import React, { useState } from 'react'
import style from './BurgerNav.module.scss'
import { Link } from 'react-scroll'

export const BurgerNav = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const onBurgerButtonBtnClick = () => {
		setMenuIsOpen(!menuIsOpen)
	}

	return (
		<div className={style.burgerNav}>
			<div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
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
			<div
				onClick={onBurgerButtonBtnClick}
				className={menuIsOpen ? `${style.burgerBtn} ${style.btnShow}` : style.burgerBtn}
			></div>
		</div>
	)
}
