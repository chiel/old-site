import PT from 'prop-types';
import React from 'react';

import css from '../styles/header.module.css';

export default function Header({ background, children }) {
	return (
		<header className={css.header} style={{ backgroundImage: `url(${background})` }}>
			{children}
		</header>
	);
}

Header.propTypes = {
	background: PT.string.isRequired,
	children: PT.node.isRequired,
};
