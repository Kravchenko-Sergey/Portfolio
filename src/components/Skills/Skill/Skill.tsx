import React from 'react'
import style from './Skill.module.css'

type SkillPropsType = {
	icon: string
	title: string
	description: string
}

export const Skill = ({ icon, title, description }: SkillPropsType) => {
	return (
		<div className={style.skill}>
			<div className={style.icon}>
				<img src={icon} alt='' />
			</div>
			<h3 className={style.title}>{title}</h3>
			<span className={style.description}>{description}</span>
		</div>
	)
}
