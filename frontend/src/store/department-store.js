import { action, observable, runInAction } from 'mobx';
import { fetch } from 'whatwg-fetch';

export class DepartmentStore {
	@observable
	id = null;
	@observable
	name = null;

	@observable.shallow
	employees = [];
	@observable
	nextPageUrl = null;

	@action
	async load(id) {
		this.id = id;
		const department = await fetch(`/api/department/${id}`).then((res) => res.json());
		runInAction(() => {
			this.name = department.name;
		});
	}

	async loadEmployees() {
		const list = await fetch(`/api/department/${this.id}/employees`).then((res) => res.json());
		runInAction(() => {
			this.employees = list.results;
			this.nextPageUrl = list.next;
		});
	}

	@action.bound
	async loadMoreEmployees() {
		const list = await fetch(this.nextPageUrl).then((res) => res.json());
		runInAction(() => {
			this.employees = this.employees.concat(list.results);
			this.nextPageUrl = list.next;
		});
	}
}
