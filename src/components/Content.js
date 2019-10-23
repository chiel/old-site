import PT from 'prop-types';
import React from 'react';

import css from '../styles/content.module.css';

export default function Content({ children }) {
	return (
		<div className={css.container}>
			<div className={css.content}>
				{children}
			</div>
		</div>
	);
}

Content.propTypes = {
	children: PT.node.isRequired,
};
