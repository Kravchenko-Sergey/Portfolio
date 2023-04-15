import React from 'react'
import style from './DistantWork.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const DistantWork = () => {
	return (
		<div className={style.distantWorkBlock}>
			<div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
				<h2 className={style.title}>I'm looking into remote work options</h2>
				<button className={style.button}>
					<a href='#contacts'>Hire me!</a>
				</button>
			</div>
		</div>
	)
}
