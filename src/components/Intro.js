import React from 'react';

import TitleSlides from './TitleSlides';
import useParallaxEffect from '../hooks/useParallaxEffect';
import useViewportHeight from '../hooks/useViewportHeight';
import css from '../styles/intro.module.css';

export default function Intro() {
	const height = useViewportHeight();
	const offset = useParallaxEffect(height);

	const backgroundStyle = {
		transform: `translate3d(0, ${Math.round(offset * 0.33)}px, 0)`,
	};

	const contentStyle = {
		opacity: (offset ? (1 / height) * (height - offset) : 1).toFixed(2),
		transform: `translate3d(0, ${Math.round(offset * 0.5)}px, 0)`,
	};

	return (
		<section className={css.container}>
			<figure className={css.background} style={backgroundStyle} />
			<div className={css.content} style={contentStyle}>
				<h1>Chiel <span>Kunkels</span></h1>
				<TitleSlides className={css.titles} />
			</div>
		</section>
	);
}
