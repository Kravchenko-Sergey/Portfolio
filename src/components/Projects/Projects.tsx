import React from 'react'
import style from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import { Project } from './Project/Project'
import socialNetworkImage from '../../assets/images/projectsImages/enterprise-social-network.png'
import todoListImage from '../../assets/images/projectsImages/todo.jpg'
import counterImage from '../../assets/images/projectsImages/cmi-header.png'

export const Projects = () => {
	const projects = [
		{
			id: '1',
			image: todoListImage,
			title: 'To-do list',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci.'
		},
		{ id: '2', image: socialNetworkImage, title: 'Social network', description: 'Lorem ipsum dolor sit amet.' },
		{
			id: '3',
			image: counterImage,
			title: 'Counter',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
		}
	]

	const projectElement = projects.map(project => (
		<Project key={project.id} image={project.image} title={project.title} description={project.description} />
	))

	return (
		<div className={style.projectsBlock}>
			<div className={`${styleContainer.container} ${style.projectsContainer}`}>
				<span className={style.subTitle}>Portfolio</span>
				<h2 className={style.title}>Some of my most recent project</h2>
				<div className={style.projects}>{projectElement}</div>
			</div>
		</div>
	)
}
