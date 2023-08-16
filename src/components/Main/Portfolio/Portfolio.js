import './Portfolio.css'
import { NavLink } from 'react-router-dom'

function Portfolio() {
	return (
		<section className='portfolio'>
			<h2 className='portfolio__title'>Портфолио</h2>
			<NavLink className='portfolio__links' to={'https://organik777.github.io/russian-travel/'} target="_blank" rel="noreferrer">
				<p className='portfolio__link1'>Статичный сайт</p>
				<p className='portfolio__link2'>↗</p>
			</NavLink>
			<NavLink className='portfolio__links' to={'https://organik777.github.io/mesto/'} target="_blank" rel="noreferrer">
				<p className='portfolio__link1'>Адаптивный сайт</p>
				<p className='portfolio__link2'>↗</p>
			</NavLink>
			<NavLink className='portfolio__links' to={'https://organik777.github.io/russian-travel/'} target="_blank" rel="noreferrer">
				<p className='portfolio__link1'>Одностраничное приложение</p>
				<p className='portfolio__link2'>↗</p>
			</NavLink>
		</section>
	)
}

export default Portfolio
