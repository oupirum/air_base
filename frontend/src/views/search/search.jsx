import React, { useCallback, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { EmployeeCard } from '../employee-card';
import { action } from 'mobx';
import { SearchInput } from '../header/search-input';
import { List } from '../list';

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
	}, [location.search, search]);

	const handleChange = useCallback(action((ev) => {
		search.query = ev.currentTarget.value;
	}), []);

	return (
		<div className={s.search}>
			<SearchInput value={search.query} onChange={handleChange} className={s.searchInput} />
			<List
				hasMore={search.nextPageUrl}
				loadMore={search.loadMore}
			>
				{search.results.map((employee) => (
					<EmployeeCard employee={employee} />
				))}
			</List>
		</div>
	);
}));
