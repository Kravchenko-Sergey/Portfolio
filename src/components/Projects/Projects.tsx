import React from 'react'
import style from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import { Project } from './Project/Project'

export const Projects = () => {
	return (
		<div className={style.projectsBlock}>
			<div className={`${styleContainer.container} ${style.projectsContainer}`}>
				<span className={style.subTitle}>Portfolio</span>
				<h2 className={style.title}>Some of my most recent projects</h2>
				<div className={style.projects}>
					<Project
						title={'To-do list'}
						description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci.'}
					/>
					<Project title={'Social network'} description={'Lorem ipsum dolor sit amet.'} />
					<Project title={'Counter'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'} />
				</div>
			</div>
		</div>
	)
}
