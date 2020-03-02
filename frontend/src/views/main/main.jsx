import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { List } from '../list';

import s from './main.module.css';

export const Main = inject((rootStore) => ({
	departments: rootStore.departments,
}))(observer(({ departments }) => {
	useEffect(() => {
		departments.load();
	}, []);

	return (
		<div className={s.main}>
			<List
				hasMore={departments.nextPageUrl}
				loadMore={departments.loadMore}
			>
				{departments.list.map((department) => (
					<div className={s.department}>
						<Link to={`/department/${department.id}`} className={s.link}>{department.name}</Link>
					</div>
				))}
			</List>
		</div>
	);
}));
