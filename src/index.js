import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Router from './router';
import configureStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import LocalStorage from './service/LocalStorage';

const getInitState = () => ({
	user: LocalStorage.getItem('user') || {}
});

const store = configureStore(getInitState());

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
