import { all } from 'redux-saga/effects';

import { watcherSagaAPI } from './containers/KanjiData/sagas';
import watcherSagaHeader from './containers/Header/sagas';

export function* watchAll() {
	yield all([
		watcherSagaAPI,
		watcherSagaHeader,
	]);
}