import { action, observable, runInAction } from 'mobx';

export class SearchStore {
	@observable
	query = '';
	@observable
	results = [];
	_nextPageUrl = null;

	@action
	async execute(query) {
		this.query = query;
		const list = await fetch(`/api/search?query=${encodeURIComponent(this.query)}`).then((res) => res.json());
		runInAction(() => {
			this.results = list.results;
			this._nextPageUrl = list.next;
		});
	}

	async loadMore() {
		const list = await fetch(this._nextPageUrl).then((res) => res.json());
		runInAction(() => {
			this.results = this.results.concat(list.results);
			this._nextPageUrl = list.next;
		});
	}
}
