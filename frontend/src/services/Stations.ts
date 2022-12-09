import { Coordinates } from "../App";

export const getStations = ({pos}:{pos:Coordinates}) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ddb6309146mshf28993ed07a1e0cp1aa913jsnefa8bc56a457',
			'X-RapidAPI-Host': 'ev-charging-stations.p.rapidapi.com'
		}
	};
	
	return fetch(`https://ev-charging-stations.p.rapidapi.com/get_stations_1km?latitude=${pos.lat}9&longitude=${pos.lng}&region=us`, options)
		
}

