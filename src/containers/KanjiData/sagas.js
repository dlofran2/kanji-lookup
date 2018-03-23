import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { ENG_TO_KANJ_URL, KANJ_DETAIL_URL } from './constants';

const config = {
	headers: {'X-Mashape-Key': 'QE1NR2kykkmshqug6y1ngSe8jckcp1sNWMbjsnCzJ756oAgnHr'}
};

export const watcherSagaAPI = [
	takeLatest('API_CALL_REQUEST', workerSagaAPI),
]

function convert(s) {
	function parse(a, c) {
		return String.fromCharCode(parseInt(c, 16));
	}
	return encodeURIComponent(s.replace(/%u([0-f]{4})/gi, parse));
}
  
function fetchData(arg) {
	const url = `${ENG_TO_KANJ_URL}${arg}`;
	return axios.get(url, config);
}

async function fetchDetailedData(args) {
	let arr = [];
	let ret = [];

	args.map((arg) => {
		let url = `${KANJ_DETAIL_URL}${arg}`;
		arr.push(axios.get(url, config));
		return null;
	})

	ret = await axios.all(arr)
	return ret;
}

function* workerSagaAPI(arg) {
	try {
		if (arg.data === undefined) {
			// eslint-disable-next-line
			throw 'Word not found';
		}

		let response = yield call(fetchData, arg.data);
		if (response.data.length === 0) {
			response = yield call(fetchData, arg.data.toLowerCase());
		}
		const data = response.data;

		if (data.length === 0) {
			// eslint-disable-next-line
			throw 'Word not found.';
		}

		let arr = [];
		for (let i = 0; i < data.length; i++) {
			arr.push(convert(data[i].kanji.character))
		}

		const detailedResponse = yield call(fetchDetailedData, arr);
		
		for (var i = 0; i < detailedResponse.length; i++) {
			let detailedData = detailedResponse[i].data;
			yield put({ type: 'API_CALL_SUCCESS', detailedData})
		}

	} catch (error) {
		yield put({ type: 'API_CALL_FAILURE', error });
	}
}