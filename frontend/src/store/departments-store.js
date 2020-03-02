import { action, observable, runInAction } from 'mobx';
import { fetch } from 'whatwg-fetch';

export class DepartmentsStore {
	@observable.shallow
	list = [];
	@observable
	nextPageUrl = null;

	async load() {
		const list = await fetch('/api/departments').then((res) => res.json());
		runInAction(() => {
			this.list = list.results;
			this.nextPageUrl = list.next;
		});
	}

	@action.bound
	async loadMore() {
		const list = await fetch(this.nextPageUrl).then((res) => res.json());
		runInAction(() => {
			this.list = this.list.concat(list.results);
			this.nextPageUrl = list.next;
		});
	}
}
