import React from 'react'
import style from './Project.module.scss'
import Fade from 'react-reveal/Fade'

type ProjectPropsType = {
	image: string
	URL: string
	title: string
	description: string
}

export const Project = ({ image, URL, title, description }: ProjectPropsType) => {
	return (
		<Fade bottom>
			<div className={style.project}>
				<div className={style.imgContainer}>
					<a href={URL} target={'_blank'} className={style.button}>
						<img src={image} alt='' />
					</a>
				</div>
				<h3 className={style.projectName}>{title}</h3>
				<span className={style.description}>{description}</span>
			</div>
		</Fade>
	)
}
