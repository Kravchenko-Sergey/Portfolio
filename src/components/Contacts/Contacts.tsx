import React from 'react'
import style from './Contacts.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Contacts = () => {
	return (
		<div className={style.contactsBlock}>
			<div className={`${styleContainer.container} ${style.contactsContainer}`}>
				<div className={style.textBlock}>
					<h2 className={style.title}>Let's get in touch</h2>
					<p className={style.text}>
						I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get
						the most out of our first catch-up.
					</p>
					<h3>Living In:</h3>
					<address>Pyatigorsk, Russia</address>
					<h3>Call:</h3>
					<p>+7(968)272-78-26</p>
					<ul className={style.socialIcons}>
						<li className={style.socialIcon}>
							<a href='https://it-incubator.io/'>
								<i>+</i>
							</a>
						</li>
						<li className={style.socialIcon}>
							<a href='https://it-incubator.io/'>
								<i>+</i>
							</a>
						</li>
						<li className={style.socialIcon}>
							<a href='https://it-incubator.io/'>
								<i>+</i>
							</a>
						</li>
						<li className={style.socialIcon}>
							<a href='https://it-incubator.io/'>
								<i>+</i>
							</a>
						</li>
						<li className={style.socialIcon}>
							<a href='https://it-incubator.io/'>
								<i>+</i>
							</a>
						</li>
					</ul>
				</div>
				<div className={style.formBlock}>
					<form action='' className={style.form}>
						<span>What is Your Name:</span>
						<input className={style.input} />
						<span>Your Email Address:</span>
						<input className={style.input} />
						<span>How can I Help you?:</span>
						<textarea name='' id='' className={style.textarea}></textarea>
					</form>
					<button className={style.button}>Send</button>
				</div>
			</div>
		</div>
	)
}
