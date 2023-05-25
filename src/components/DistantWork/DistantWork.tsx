import React from 'react'
import style from './DistantWork.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import Fade from 'react-reveal/Fade'
import RubberBand from 'react-reveal/RubberBand'
import { Link } from 'react-scroll'

export const DistantWork = () => {
	return (
		<div className={style.distantWorkBlock}>
			<div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
				<Fade bottom>
					<h2 className={style.title}>I'm looking into remote work options</h2>
					<RubberBand>
						<button className={style.button}>
							<Link
								to='contacts'
								spy={true}
								smooth={true}
								hashSpy={true}
								offset={0}
								duration={1000}
								delay={0}
								isDynamic={true}
								ignoreCancelEvents={false}
								spyThrottle={500}
							>
								Hire me!
							</Link>
						</button>
					</RubberBand>
				</Fade>
			</div>
		</div>
	)
}
