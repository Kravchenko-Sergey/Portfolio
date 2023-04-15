import React from 'react'
import style from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import arrowDown from '../../assets/images/arrow-down.svg'
import avatar from '../../assets/images/avatar.png'

export const Main = () => {
	return (
		<div className={style.mainBlock}>
			<div className={`${styleContainer.container} ${style.mainContainer}`}>
				<div className={style.text}>
					<span className={style.text1}>Hi i'm Sergey</span>
					<h1 className={style.text2}>Frontend Developer</h1>
					<div className={style.buttons}>
						<button className={style.button1}>
							<a href='#projects'>View My Works</a>
						</button>
						<div className={style.button2Block}>
							<button className={style.button2}>
								<a href='#contacts'>Contact me</a>
							</button>
							<img src={arrowDown} alt='arrowDown' />
						</div>
					</div>
				</div>
				<div className={style.avatar}>
					<img src={avatar} alt='avatar' />
				</div>
			</div>
		</div>
	)
}
