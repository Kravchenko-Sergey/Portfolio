import React from 'react'
import style from './Header.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import { Nav } from '../Nav/Nav'

export const Header = () => {
	return (
		<div className={style.header}>
			<div className={styleContainer.container}>
				<Nav />
			</div>
		</div>
	)
}
