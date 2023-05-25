import React from 'react'
import style from './Skill.module.scss'
import Fade from 'react-reveal/Fade'

type SkillPropsType = {
	icon: string
	title: string
	description: string
}

export const Skill = ({ icon, title, description }: SkillPropsType) => {
	return (
		<Fade bottom>
			<div className={style.skill}>
				<div className={style.icon}>
					<img src={icon} alt='icon' />
				</div>
				<h3 className={style.title}>{title}</h3>
				<span className={style.description}>{description}</span>
			</div>
		</Fade>
	)
}
