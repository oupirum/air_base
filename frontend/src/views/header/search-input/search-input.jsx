import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import s from './search-input.module.css';

export const SearchInput = (props) => {
	const history = useHistory();

	const handleKeyUp = useCallback((ev) => {
		if (ev.keyCode === 13) {
			history.push(`/search?query=${encodeURIComponent(ev.currentTarget.value)}`);
		}
	}, [history]);

	return (
		<div className={classNames(props.className, s.searchInput)}>
			<input
				type="search"
				onKeyUp={handleKeyUp}
				value={props.value}
				onChange={props.onChange}
				placeholder="Поиск..."
				className={s.input}
			/>
		</div>
	);
};
