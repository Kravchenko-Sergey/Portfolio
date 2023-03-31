import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import { Skill } from './Skill/Skill'

export const Skills = () => {
	return (
		<div className={style.skillsBlock}>
			<div className={`${styleContainer.container} ${style.skillsContainer}`}>
				<span className={style.subTitle}>What i do?</span>
				<h2 className={style.title}>How I can help your next project</h2>
				<div className={style.skills}>
					<Skill
						title={'HTML'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores dignissimos dolorem esse facere impedit labore magnam maiores minus officiis quae, quis ratione, reiciendis, rem similique sit unde voluptates voluptatum.'
						}
					/>
					<Skill
						title={'CSS'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate delectus dicta neque possimus quae quaerat quas saepe sit! Doloribus dolorum eius itaque odio unde. A alias maiores natus sapiente voluptatum!'
						}
					/>
					<Skill
						title={'JS'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugit illo illum maxime nobis porro qui quis similique sit! Aliquid animi delectus eum natus officiis, quaerat quisquam ratione tempore voluptatibus.'
						}
					/>
					<Skill
						title={'Storybook'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi, architecto consequatur, dolor eaque eveniet facere facilis illo itaque odio, quas repellendus similique vitae. Error exercitationem laborum quos suscipit voluptatem.'
						}
					/>
					<Skill
						title={'React'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo facere nesciunt nisi quam, repudiandae sed sint. Adipisci aliquid, asperiores delectus doloribus, et iusto labore obcaecati quis sequi temporibus veniam?'
						}
					/>
					<Skill
						title={'Redux'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet architecto autem beatae distinctio eos eum in incidunt libero molestiae neque nisi odio, provident quod sit, suscipit tenetur vel voluptatibus.'
						}
					/>
				</div>
			</div>
		</div>
	)
}
