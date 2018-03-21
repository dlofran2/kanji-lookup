import { take, all } from 'redux-saga/effects';

import {
    NAV_OPEN,
    NAV_CLOSE
} from './constants'

function* watcherSagaHeaderNav() {
    while(true) {
        yield take(NAV_OPEN);
        yield take(NAV_CLOSE);
    }
}

function* watcherSagaHeader() {
    yield all([
        watcherSagaHeaderNav,
    ])
}

export default watcherSagaHeader;
