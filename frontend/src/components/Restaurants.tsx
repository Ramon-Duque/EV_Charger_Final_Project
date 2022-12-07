import axios from 'axios';

const url = 'http://127.0.0.1:5001/evcharger-a2044/us-central1/api/restaurants';

export const getRestaurantsNearby =async () => {
    console.log("I'm in getResturantsNearby in the FrontEnd!");
    return axios.get(url);
};

export const getMyTestResult =async () => {
    console.log("Am I visible?");
    return axios.get(url);
};
