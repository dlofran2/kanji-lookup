import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './config/routes';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import rootReducer from './redux';
import { watchAll } from './sagas';

const sagaMiddleware = createSagaMiddleware();
// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
	rootReducer,
	compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAll);

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
