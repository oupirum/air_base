import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import s from './main.module.css';

export const Main = inject((rootStore) => ({
	departments: rootStore.departments,
}))(observer(({ departments }) => {
	useEffect(() => {
		departments.load();
	}, []);

	return (
		<div className={s.main}>
			{departments.list.map((department) => (
				<div key={department.id}>
					<Link to={`/department/${department.id}`}>{department.name}</Link>
				</div>
			))}
		</div>
	);
}));
