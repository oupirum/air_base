import { observable, runInAction } from 'mobx';
import { fetch } from 'whatwg-fetch';

export class EmployeeStore {
	@observable
	data = {};

	async load(id) {
		const data = await fetch(`/api/employee/${id}`).then((res) => res.json());
		runInAction(() => {
			this.data = data;
		});
	}
}
