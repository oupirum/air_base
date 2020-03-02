import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { rootStore } from './store/root-store';
import { Header } from './views/header';
import { Footer } from './views/footer';
import { Main } from './views/main';
import { Department } from './views/department';
import { Employee } from './views/employee';
import { Search } from './views/search';

import s from './app.module.css';

configure({ enforceActions: 'observed' });

export const App = () => {
	return (
		<div className={s.app}>
			<Provider {...rootStore}>
				<HashRouter basename="/">
					<Header />
					<div className={s.content}>
						<Route path="/" exact component={Main} />
						<Route path="/department/:id" component={Department} />
						<Route path="/employee/:id" component={Employee} />
						<Route path="/search" component={Search} />
					</div>
					<Footer />
				</HashRouter>
			</Provider>
		</div>
	);
};
