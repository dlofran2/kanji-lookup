import { combineReducers } from 'redux';

import { api } from './containers/KanjiData/redux';
import { header } from './containers/Header/redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({ api, header, form })

export default rootReducer;