import axios from 'axios';

//Update port for each firebase deploy
let currentPort = '5001';

const restaurantUrl = 'http://127.0.0.1:' + currentPort + '/evcharger-a2044/us-central1/api/restaurants';
//maybe make async
export const getRestaurantsNearby = (latitude: number, longitude: number) => {
    console.log("Get station lat and long " + latitude, longitude);
    return axios.get(restaurantUrl, {
    params: {
        latitude: latitude,
        longitude: longitude
    }}).then(res => res.data);
};

const cafeUrl = 'http://127.0.0.1:5001/evcharger-a2044/us-central1/api/cafes';

export const getCafesNearby = () => {
    return axios.get(cafeUrl);
};

const movieTheaterUrl = 'http://127.0.0.1:5001/evcharger-a2044/us-central1/api/movie-theaters';

export const getMovieTheatersNearby = () => {
    return axios.get(movieTheaterUrl);
};

const spaUrl = 'http://127.0.0.1:5001/evcharger-a2044/us-central1/api/spas';

export const getSpasNearby = () => {
    return axios.get(spaUrl);
};

const artGalleryUrl = 'http://127.0.0.1:5001/evcharger-a2044/us-central1/api/art-galleries';

export const getArtGalleriesNearby = () => {
    return axios.get(artGalleryUrl);
};