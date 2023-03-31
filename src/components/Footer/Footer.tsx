import React from 'react'
import style from './Footer.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Footer = () => {
	return (
		<div className={style.footerBlock}>
			<div className={`${styleContainer.container} ${style.footerContainer}`}>
				<span className={style.text}>Copyright © 2023. All Rights Reserved.</span>
			</div>
		</div>
	)
}
