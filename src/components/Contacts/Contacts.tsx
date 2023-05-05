import React from 'react'
import style from './Contacts.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import telegramLogo from '../../assets/images/contactsIcons/telegram logo.svg'
import VKLogo from '../../assets/images/contactsIcons/cib logo.svg'
import instagramLogo from '../../assets/images/contactsIcons/instagram logo.svg'
import githubLogo from '../../assets/images/contactsIcons/github-1 logo.svg'
import linkedInLogo from '../../assets/images/contactsIcons/LinkedIn_logo_In-Black logo.svg'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormType = {
	name: string
	email: string
	text: string
}

export const Contacts = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset
	} = useForm<FormType>({ mode: 'onBlur' })
	const onSubmit: SubmitHandler<FormType> = data => {
		console.log(`Your name ${data.name}`)
		reset()
	}
	return (
		<div id='contacts' className={style.contactsBlock}>
			<div className={`${styleContainer.container} ${style.contactsContainer}`}>
				<div className={style.textBlock}>
					<h2 className={style.title}>Let's get in touch</h2>
					<p className={style.text}>
						I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get
						the most out of our first catch-up.
					</p>
					<h3>Living In:</h3>
					<a
						className={style.address}
						href='https://maps.google.com?saddr=Current+Location&daddr=44.0358221,43.0663875'
						target='blank'
					>
						Pyatigorsk, Russia
					</a>
					<h3>Call:</h3>
					<a className={style.tel} href='tel:+79682727826'>
						+7(968)272-78-26
					</a>
					<ul className={style.socialIcons}>
						<li className={style.socialIcon}>
							<a href='https://t.me/Kravchenko_Sergey' target='blank'>
								<img src={telegramLogo} alt='telegramLogo' />
							</a>
						</li>
						<li className={style.socialIcon}>
							<a href='https://vk.com/s_a_kravchenko' target='blank'>
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
					<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
						<span>What is Your Name:</span>
						<div className={style.item}>
							<input
								{...register('name', {
									required: 'Field is required!',
									maxLength: { value: 20, message: 'Max length 20 symbols' }
								})}
								type='text'
								className={style.input}
							/>
							{errors.name && <div className={style.inputError}>{errors.name.message}</div>}
						</div>
						<span>Your Email Address:</span>
						<div className={style.item}>
							<input
								{...register('email', {
									required: 'Field is required!',
									pattern: { value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/, message: 'Invalid email' }
								})}
								type='email'
								className={style.input}
							/>
							{errors.email && <div className={style.inputError}>{errors.email.message}</div>}
						</div>
						<span>How can I Help you?:</span>
						<div className={style.item}>
							<textarea
								{...register('text', {
									required: 'Field is required!',
									minLength: { value: 20, message: 'Minimum length is 20 symbols' },
									maxLength: { value: 300, message: 'Maximum length is 300 symbols' }
								})}
								className={style.textarea}
							/>
							{errors.text && <div className={style.inputError}>{errors.text.message}</div>}
						</div>
						<button type='submit' disabled={!isValid} className={!isValid ? style.buttonDisabled : style.button}>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
