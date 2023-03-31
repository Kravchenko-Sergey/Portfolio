import React from 'react'
import style from './Project.module.css'

type ProjectPropsType = {
	title: string
	description: string
}

export const Project = ({ title, description }: ProjectPropsType) => {
	return (
		<div className={style.project}>
			<div className={style.imgContainer}>
				<a href='' className={style.button}>
					Look
				</a>
			</div>
			<h3>{title}</h3>
			<span className={style.description}>{description}</span>
		</div>
	)
}
