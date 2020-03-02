import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { EmployeeCard } from '../employee-card';

import s from './department.module.css';

export const Department = inject((rootStore) => ({
	department: rootStore.department,
}))(observer(({ department }) => {
	const { id } = useParams();

	useEffect(() => {
		department.load(id);
		department.loadEmployees();
	}, [id]);

	return (
		<div className={s.department}>
			<div>{department.name}</div>
			<div className={s.employeesList}>
				{department.employees.map((employee) => (
					<EmployeeCard employee={employee} />
				))}
			</div>
		</div>
	);
}));
