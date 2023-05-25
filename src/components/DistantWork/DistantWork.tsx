import React from 'react'
import style from './DistantWork.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import Fade from 'react-reveal/Fade'
import RubberBand from 'react-reveal/RubberBand'

export const DistantWork = () => {
	return (
		<div className={style.distantWorkBlock}>
			<div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
				<Fade bottom>
					<h2 className={style.title}>I'm looking into remote work options</h2>
					<RubberBand>
						<button className={style.button}>
							<a href='#contacts'>Hire me!</a>
						</button>
					</RubberBand>
				</Fade>
			</div>
		</div>
	)
}
