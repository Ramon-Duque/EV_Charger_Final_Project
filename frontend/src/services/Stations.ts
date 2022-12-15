
export const getStations = () => {

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ddb6309146mshf28993ed07a1e0cp1aa913jsnefa8bc56a457',
			'X-RapidAPI-Host': 'ev-charging-stations.p.rapidapi.com'
		}
	};
	
	
	return fetch(`https://ev-charging-stations.p.rapidapi.com/get_stations_1km?latitude=42.34615279&longitude=-83.0551543&region=us`, options)
	
}
