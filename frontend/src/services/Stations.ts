import { Coordinates } from "../App";

export const getStations = () => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ddb6309146mshf28993ed07a1e0cp1aa913jsnefa8bc56a457',
			'X-RapidAPI-Host': 'ev-charging-stations.p.rapidapi.com'
		}
	};
	
	return fetch(`https://ev-charging-stations.p.rapidapi.com/get_stations_1km?latitude=42.331429&longitude=-83.045753&region=us`, options)
		
}

