import {
    API_CALL_FAILURE,
    API_CALL_REQUEST,
    API_CALL_SUCCESS
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
				fetching: true,
				error: '',
				data: [],
			};

		case API_CALL_SUCCESS:
			return {
				fetching: false,
				error: '',
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