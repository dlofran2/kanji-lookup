import axios from 'axios'

const config = {
	headers: {'X-Mashape-Key': 'QE1NR2kykkmshqug6y1ngSe8jckcp1sNWMbjsnCzJ756oAgnHr'}
};

function handleError(error) {
	console.warn(error);
	return null;
}

export async function singleKanjiDetails() {
	const kanjiDetails = await axios.get('https://kanjialive-api.p.mashape.com/api/public/kanji/%E8%A8%AA', config)
		.catch(handleError);

	return kanjiDetails.data;
}

export async function englishToKanji() {
	const englishToKanjiDetails = await axios.get('https://kanjialive-api.p.mashape.com/api/public/search/river', config);
	return englishToKanjiDetails.data;
}