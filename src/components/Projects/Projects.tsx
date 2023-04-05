import React from 'react'
import style from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import { Project } from './Project/Project'
import socialNetworkImage from '../../assets/images/projectsImages/enterprise-social-network.png'
import todoListImage from '../../assets/images/projectsImages/todo.jpg'
import counterImage from '../../assets/images/projectsImages/cmi-header.png'

export const Projects = () => {
	return (
		<div className={style.projectsBlock}>
			<div className={`${styleContainer.container} ${style.projectsContainer}`}>
				<span className={style.subTitle}>Portfolio</span>
				<h2 className={style.title}>Some of my most recent projects</h2>
				<div className={style.projects}>
					<Project
						image={todoListImage}
						title={'To-do list'}
						description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci.'}
					/>
					<Project image={socialNetworkImage} title={'Social network'} description={'Lorem ipsum dolor sit amet.'} />
					<Project
						image={counterImage}
						title={'Counter'}
						description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
					/>
				</div>
			</div>
		</div>
	)
}
