import { observable, runInAction } from 'mobx';
import { fetch } from 'whatwg-fetch';

export class DepartmentsStore {
	@observable.shallow
	list = [];
	@observable
	_nextPageUrl = null;

	async load() {
		const list = await fetch('/api/departments').then((res) => res.json());
		runInAction(() => {
			this.list = list.results;
			this._nextPageUrl = list.next;
		});
	}

	async loadMore() {
		const list = await fetch(this._nextPageUrl).then((res) => res.json());
		runInAction(() => {
			this.list = this.list.concat(list.results);
			this._nextPageUrl = list.next;
		});
	}
}
