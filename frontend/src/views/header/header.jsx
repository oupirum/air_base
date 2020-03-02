import React from 'react';
import { SearchInput } from './search-input';
import classNames from 'classnames';

import s from './header.module.css';

export const Header = (props) => {
	return (
		<header className={classNames(props.className, s.header)}>
			<a href="/" className={s.logo}>Logo</a>
			<SearchInput className={s.searchInput} />
		</header>
	)
};
