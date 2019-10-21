import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useLoopedValues from '../hooks/useLoopedValues';
import css from '../styles/intro.module.css';

const classNames = {
	enter: css.slideIn,
	enterActive: css.slideInActive,
	exit: css.slideOut,
	exitActive: css.slideOutActive,
};

const titles = [
	'full-stack developer',
	'devops enthusiast',
	'rxjs fanboy',
	'gaming afficionado',
];

export default function Intro() {
	const title = useLoopedValues(titles, 2000);

	const backgroundStyle = {};
	const contentStyle = {};

	return (
		<section className={css.container}>
			<figure className={css.background} style={backgroundStyle} />
			<div className={css.content} style={contentStyle}>
				<h1>Chiel <span>Kunkels</span></h1>
				<TransitionGroup className={css.titles} component="div">
					<CSSTransition key={title} classNames={classNames} timeout={2000}>
						<p>{title}</p>
					</CSSTransition>
				</TransitionGroup>
			</div>
		</section>
	);
}
