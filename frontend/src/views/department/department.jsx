import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { EmployeeCard } from '../employee-card';
import { List } from '../list';

import s from './department.module.css';

export const Department = inject((rootStore) => ({
	department: rootStore.department,
}))(observer(({ department }) => {
	const { id } = useParams();

	useEffect(() => {
		department.load(id);
		department.loadEmployees();
	}, [department, id]);

	return (
		<div className={s.department}>
			<div>{department.name}</div>
			<List
				hasMore={department.nextPageUrl}
				loadMore={department.loadMoreEmployees}
			>
				{department.employees.map((employee) => (
					<EmployeeCard employee={employee} />
				))}
			</List>
		</div>
	);
}));
