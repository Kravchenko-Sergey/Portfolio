import React from 'react'
import style from './AboutMe.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const AboutMe = () => {
	return (
		<div className={style.aboutMeBlock}>
			<div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
				<div className={style.subTitle}>About Me</div>
				<h2 className={style.title}>Know Me More</h2>
				<div className={style.info}>
					<div className={style.greetings}>
						Hi, I'm <span className={style.name}>Kravchenko Sergey</span>
					</div>
					<p className={style.text}>
						I am a beginner frontend developer. I enjoy developing simple, clean and slick websites that provide real
						value to the end user.
					</p>
				</div>
				<div className={style.information}>
					<div className={style.prop}>
						<p className={style.propertyTitle}>Name:</p>
						<p className={style.propertyValue}>Sergey Kravchenko</p>
					</div>
					<div className={style.prop}>
						<p className={style.propertyTitle}>Email:</p>
						<p className={style.propertyValue}>
							<a href=''>sergey.ose.pyatigorsk@gmail.com</a>
						</p>
					</div>
					<div className={style.prop}>
						<p className={style.propertyTitle}>Date of birth:</p>
						<p className={style.propertyValue}>08 May, 1990</p>
					</div>
					<div className={style.prop}>
						<p className={style.propertyTitle}>From:</p>
						<p className={style.propertyValue}>Pyatigorsk, Russia</p>
					</div>
				</div>
			</div>
		</div>
	)
}
