import axios from 'axios';

const url = 'http://localhost:3000/restaurants';

export const getRestaurantsNearby =async () => {
    console.log("I'M IN THE FRONT END RESTURANTS.TSX!");
    return axios.get(url);
};

export const getMyTestResult =async () => {
    console.log("Am I visible?");
    return axios.get(url);
};

