import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/stores';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
