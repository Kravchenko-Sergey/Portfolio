import React from 'react'
import style from './Project.module.css'

type ProjectPropsType = {
	image: string
	title: string
	description: string
}

export const Project = ({ image, title, description }: ProjectPropsType) => {
	return (
		<div className={style.project}>
			<div className={style.imgContainer}>
				<a href='' className={style.button}>
					<img src={image} alt='' />
				</a>
			</div>
			<h3 className={style.projectName}>{title}</h3>
			<span className={style.description}>{description}</span>
		</div>
	)
}
