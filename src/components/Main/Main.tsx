import React from 'react'
import style from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Main = () => {
	return (
		<div className={style.mainBlock}>
			<div className={`${styleContainer.container} ${style.mainContainer}`}>
				<div className={style.text}>
					<span className={style.text1}>Hi i'm Sergey</span>
					<h1 className={style.text2}>Frontend Developer</h1>
					<div className={style.buttons}>
						<button className={style.button1}>View My Works</button>
						<button className={style.button2}>Contact Me</button>
					</div>
				</div>
				<div className={style.photo}></div>
			</div>
		</div>
	)
}
