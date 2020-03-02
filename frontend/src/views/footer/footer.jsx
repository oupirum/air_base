import React from 'react';
import classNames from 'classnames';

import s from './footer.module.css';

export const Footer = (props) => {
	return (
		<footer className={classNames(props.className, s.footer)}>

		</footer>
	);
};
