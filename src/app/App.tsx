import React from 'react'
import './App.scss'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { Skills } from '../components/Skills/Skills'
import { Projects } from '../components/Projects/Projects'
import { DistantWork } from '../components/DistantWork/DistantWork'
import { Contacts } from '../components/Contacts/Contacts'
import { Footer } from '../components/Footer/Footer'
import { AboutMe } from '../components/AboutMe/AboutMe'

export function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<AboutMe />
			<Skills />
			<Projects />
			<DistantWork />
			<Contacts />
			<Footer />
		</div>
	)
}
