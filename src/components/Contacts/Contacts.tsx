import React from 'react'
import style from './Contacts.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import telegramLogo from '../../assets/images/contactsIcons/telegram logo.svg'
import VKLogo from '../../assets/images/contactsIcons/cib logo.svg'
import instagramLogo from '../../assets/images/contactsIcons/instagram logo.svg'
import githubLogo from '../../assets/images/contactsIcons/github-1 logo.svg'
import linkedInLogo from '../../assets/images/contactsIcons/LinkedIn_logo_In-Black logo.svg'

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
							<a href='https://it-incubator.io/' target='blank'>
								<img src={telegramLogo} alt='telegramLogo' />
							</a>
						</li>
						<li className={style.socialIcon}>
							<a href='https://it-incubator.io/' target='blank'>
								<img src={VKLogo} alt='VKLogo' />
							</a>
						</li>
						<li className={style.socialIcon}>
							<a href='https://it-incubator.io/' target='blank'>
								<img src={instagramLogo} alt='instagramLogo' />
							</a>
						</li>
						<li className={style.socialIcon}>
							<a href='https://github.com/Kravchenko-Sergey/' target='blank'>
								<img src={githubLogo} alt='githubLogo' />
							</a>
						</li>
						<li className={style.socialIcon}>
							<a href='https://it-incubator.io/' target='blank'>
								<img src={linkedInLogo} alt='linkedInLogo' />
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
