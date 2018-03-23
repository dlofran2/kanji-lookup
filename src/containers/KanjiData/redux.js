import {
    API_CALL_FAILURE,
    API_CALL_REQUEST,
	API_CALL_SUCCESS,
} from './constants';

const initialStateAPI = {
	fetching: false,
	error: '',
	data: [],
}

export function api(state = initialStateAPI, action) {
	switch(action.type) {
		case API_CALL_REQUEST:
			return {
				data: [],
				fetching: true,
				error: '',
			};

		case API_CALL_SUCCESS:
			return {
				...state,
				fetching: false,
				data: [...state.data, action.detailedData],
			};

		case API_CALL_FAILURE:
			return {
				fetching: false,
				error: action.error,
				data: [],
			};

		default:
			return state;
	}
}