import React from 'react';
import { Link } from 'react-router-dom';

import s from './employee-card.module.css';

export const EmployeeCard = (props) => {
	const { employee } = props;

	return (
		<div className={s.employeeCard}>
			<Link to={`/employee/${employee.id}`} className={s.link}>{employee.name}</Link>
		</div>
	);
};
