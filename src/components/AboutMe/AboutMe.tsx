import React from 'react'
import style from './AboutMe.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import Fade from 'react-reveal/Fade'
export const AboutMe = () => {
	return (
		<div id='aboutMe' className={style.aboutMeBlock}>
			<div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
				<Fade bottom>
					<div className={style.subTitle}>About Me</div>
					<h2 className={style.title}>Know Me More</h2>
				</Fade>
				<Fade bottom>
					<div className={style.info}>
						<div className={style.greetings}>
							Hi, I'm <span className={style.name}>Kravchenko Sergey</span>
						</div>
						<p className={style.text}>
							I'm a beginner frontend developer. I enjoy developing simple, clean and slick websites that provide real
							value to the end user.
						</p>
					</div>
				</Fade>
				<Fade bottom>
					<div className={style.information}>
						<div className={style.prop}>
							<p className={style.propertyTitle}>Name:</p>
							<p className={style.propertyValue}>Sergey Kravchenko</p>
						</div>
						<div className={style.prop}>
							<p className={style.propertyTitle}>Email:</p>
							<p className={style.propertyValue}>
								<a href='mailto:sergey.ose.pyatigorsk@gmail.com'>sergey.ose.pyatigorsk@gmail.com</a>
							</p>
						</div>
						<div className={style.prop}>
							<p className={style.propertyTitle}>Date of birth:</p>
							<p className={style.propertyValue}>08 May, 1990</p>
						</div>
						<div className={style.prop}>
							<p className={style.propertyTitle}>From:</p>
							<a
								className={style.address}
								href='https://maps.google.com?saddr=Current+Location&daddr=44.0358221,43.0663875'
								target='blank'
							>
								Pyatigorsk, Russia
							</a>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	)
}
