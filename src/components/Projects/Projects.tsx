import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import { Project } from './Project/Project'
import socialNetworkImage from '../../assets/images/projectsImages/enterprise-social-network.png'
import todoListImage from '../../assets/images/projectsImages/todo.jpg'
import counterImage from '../../assets/images/projectsImages/cmi-header.png'
import Fade from 'react-reveal/Fade'

const projects = [
	{
		id: '1',
		URL: 'https://github.com/Kravchenko-Sergey/todoList',
		image: todoListImage,
		title: 'To-do list',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci.'
	},
	{
		id: '2',
		URL: 'https://github.com/Kravchenko-Sergey/social-network',
		image: socialNetworkImage,
		title: 'Social network',
		description: 'Lorem ipsum dolor sit amet.'
	},
	{
		id: '3',
		URL: 'https://github.com/Kravchenko-Sergey/Counter',
		image: counterImage,
		title: 'Counter',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
	}
]

export const Projects = () => {
	const projectElement = projects.map(project => (
		<Project
			key={project.id}
			URL={project.URL}
			image={project.image}
			title={project.title}
			description={project.description}
		/>
	))

	return (
		<div id='projects' className={style.projectsBlock}>
			<div className={`${styleContainer.container} ${style.projectsContainer}`}>
				<Fade bottom>
					<span className={style.subTitle}>Portfolio</span>
					<h2 className={style.title}>Some of my most recent project</h2>
				</Fade>
				<div className={style.projects}>{projectElement}</div>
			</div>
		</div>
	)
}
