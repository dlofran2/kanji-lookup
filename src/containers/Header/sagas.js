import { take, all } from 'redux-saga/effects';

import {
    NAV_OPEN,
    NAV_CLOSE,
    SEARCH_OPEN,
    SEARCH_CLOSE,
} from './constants';

function* watcherSagaHeaderNav() {
    while(true) {
        yield take(NAV_OPEN);
        yield take(NAV_CLOSE);
    }
}

function* watcherSagaHeaderSearch() {
    while(true) {
        yield take(SEARCH_OPEN);
        yield take(SEARCH_CLOSE);
    }
}

function* watcherSagaHeader() {
    yield all([
        watcherSagaHeaderNav,
        watcherSagaHeaderSearch,
    ])
}

export default watcherSagaHeader;
