import React from 'react';
import { SearchInput } from './search-input';

import s from './header.module.css';

export const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.logo}>Logo</div>
			<SearchInput className={s.searchInput} />
		</header>
	)
};
