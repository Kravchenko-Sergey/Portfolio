import React from 'react'
import style from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import arrowDown2 from '../../assets/images/arrow-down2.png'
import avatar from '../../assets/images/avatar.png'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import ReactTypingEffect from 'react-typing-effect'
import { Link } from 'react-scroll'

export const Main = () => {
	return (
		<div id='main' className={style.mainBlock}>
			<div className={`${styleContainer.container} ${style.mainContainer}`}>
				<div className={style.content}>
					<div className={style.text}>
						<Fade>
							<span className={style.text1}>Hi i'm Sergey</span>
						</Fade>
						<Fade>
							<h1 className={style.text2}>
								<ReactTypingEffect text='Frontend Developer' typingDelay='500' />
							</h1>
						</Fade>
						<Fade>
							<div className={style.buttons}>
								<button className={style.button1}>
									<Link
										to='projects'
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
										View My Works
									</Link>
								</button>
								<div className={style.button2Block}>
									<button className={style.button2}>
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
										></Link>
									</button>
								</div>
							</div>
						</Fade>
					</div>
					<Zoom>
						<div className={style.avatar}>
							<img src={avatar} alt='avatar' />
						</div>
					</Zoom>
				</div>
				<div className={style.arrowDown}>
					<Link
						className={style.arr1}
						to='aboutMe'
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
						<img src={arrowDown2} alt='arrowDown' />
					</Link>
				</div>
			</div>
		</div>
	)
}
