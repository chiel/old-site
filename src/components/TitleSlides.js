import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useLoopedValues from '../hooks/useLoopedValues';
import css from '../styles/title-slides.module.css';

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

export default function TitleSlides({ className }) {
	const title = useLoopedValues(titles, 2000);

	return (
		<TransitionGroup className={className} component="div">
			<CSSTransition key={title} classNames={classNames} timeout={2000}>
				<p>{title}</p>
			</CSSTransition>
		</TransitionGroup>
	);
}
