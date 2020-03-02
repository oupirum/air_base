import { action, observable, runInAction } from 'mobx';

export class SearchStore {
	@observable
	query = '';
	@observable
	results = [];
	@observable
	nextPageUrl = null;

	@action
	async execute(query) {
		this.query = query;
		const list = await fetch(`/api/search?query=${encodeURIComponent(this.query)}`)
			.then((res) => res.json());
		runInAction(() => {
			this.results = list.results;
			this.nextPageUrl = list.next;
		});
	}

	@action.bound
	async loadMore() {
		const list = await fetch(this.nextPageUrl).then((res) => res.json());
		runInAction(() => {
			this.results = this.results.concat(list.results);
			this.nextPageUrl = list.next;
		});
	}
}
