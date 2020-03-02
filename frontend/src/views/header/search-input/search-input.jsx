import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import s from './search-input.module.css';

export const SearchInput = () => {
	const history = useHistory();

	const handleKeyUp = useCallback((ev) => {
		if (ev.keyCode === 13) {
			history.push(`/search?query=${ev.currentTarget.value}`);
			window.location.reload();
		}
	}, [history]);

	return (
		<div className={s.searchInput}>
			<input type="search" onKeyUp={handleKeyUp} placeholder="Поиск..." />
		</div>
	);
};
