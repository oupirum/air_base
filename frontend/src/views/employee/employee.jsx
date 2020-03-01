import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import s from './employee.module.css';

export const Employee = inject((rootStore) => ({
	employee: rootStore.employee,
}))(observer((props) => {
	const { employee: { data } } = props;
	const { id } = useParams();

	useEffect(() => {
		props.employee.load(id);
	}, [id]);

	return (
		<div className={s.employee}>
			<div className={s.row}>{data.name}</div>
			<div className={s.row}>
				<label className={s.label}>Отдел</label>:
				<span className={s.value}>
					{data.department && (
						<Link className={s.valueLink} to={`/department/${data.department.id}`}>
							{data.department.name}
						</Link>
					)}
				</span>
			</div>
			<div className={s.row}>
				<label className={s.label}>Должность</label>:
				<span className={s.value}>{data.position}</span>
			</div>
			<div className={s.row}>
				<label className={s.label}>Телефон</label>:
				<span className={s.value}>{data.phone}</span>
			</div>
			<div className={s.row}>
				<label className={s.label}>E-mail</label>:
				<span className={s.value}>{data.email}</span>
			</div>
		</div>
	);
}));
