import React from 'react'
import style from './Footer.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as MySVG } from '../../assets/images/buttonArrowUp.svg'
import Fade from 'react-reveal/Fade'

export const Footer = () => {
	return (
		<div className={style.footerBlock}>
			<div className={`${styleContainer.container} ${style.footerContainer}`}>
				<Fade bottom>
					<span className={style.text}>Copyright © 2023. All Rights Reserved.</span>
				</Fade>
			</div>
			<div>
				<ScrollToTop
					className={style.buttonUp}
					style={{ bottom: '10px', right: '10px', borderRadius: '36px' }}
					smooth
					top={600}
					component={<MySVG />}
					width={'36px'}
					height={'36px'}
				/>
			</div>
		</div>
	)
}
