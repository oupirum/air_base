import React, { useCallback, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { EmployeeCard } from '../employee-card';
import { action } from 'mobx';

import s from './search.module.css';

export const Search = inject((rootStore) => ({
	search: rootStore.search,
}))(observer((props) => {
	const { search, location } = props;

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const query = params.get('query');
		if (query) {
			search.execute(query);
		}
	}, []);

	const handleChange = useCallback(action((ev) => {
		search.query = ev.currentTarget.value;
	}), []);

	const handleKeyUp = useCallback((ev) => {
		if (ev.keyCode === 13) {
			search.execute(ev.currentTarget.value);
		}
	}, []);

	return (
		<div className={s.search}>
			<input type="search" onKeyDown={handleKeyUp} value={search.query} onChange={handleChange} placeholder="Поиск..." />
			<div className={s.results}>
				{search.results.map((employee) => (
					<EmployeeCard employee={employee} />
				))}
			</div>
		</div>
	);
}));
