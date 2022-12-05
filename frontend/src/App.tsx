import { stringify } from 'querystring';
import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/map';
import Nearby from './components/Nearby';
// import { Nearby } from './components/Nearby';
import initMap from './components/NearbyTest';

interface pos{
    pos: number;
}

export interface Coordinates {
    lat: number;
    lng: number;
};

function App(this: any) {
    

    const [pos, setPos] = useState<Coordinates>();
  
    useEffect(() => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            const Coordinates = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
          }
          setPos(Coordinates);
          })
      }},[]);

      // let request = {
      //     location: new google.maps.LatLng(42.972190, -85.610360),
      //     radius: 5000,
      //     type: ['restaurant']  
      // };

      // const results = [];
      // const places = document.getElementById('places');
      // const service = new google.maps.places.PlacesService(places);

      // service.nearbySearch(request, callback);

      const restaurantSearch = () => {
        const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'

        const location = `location=${this.latitude},${this.longitude}`; //lat: 42.972190 lng: -85.610360
        const radius = '&radius=2000';
        const type = '&keyword=restaurant';
        const key = '&key=REACT_APP_API_KEY';

        const restaurantSearchUrl = url + location + radius + type + key;
        
        fetch(restaurantSearchUrl)
        .then(response => response.json())
        .then(result => this.setState({restaurantList: result}))
        .catch( e => console.log(e))
 
      }
      // console.log(this.restaurantList.results)

      // const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.972190,-85.610360&radius=500&type=restaurant&key=KEYREACT_APP_API_KEY';
      // fetch(url)
      // .then((response) => response.json())
      // .then((JsonResponse) => {
      //     console.log(JsonResponse)
      // })
      // .catch((error) => {
      //     alert('error')
      // });
    

      // const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.972190,-85.610360'&radius=500&type=restaurant&key=REACT_APP_API_KEY';

 return (
  // <button onClick={Nearby({pos})}></button>
   <>
     <Map pos={pos} />
     {/* <li>{this.restaurantList.results}</li> */}
     {/* <li>{this.restaurantSearch()}</li> */}
     {/* <Nearby pos={pos} /> */}
  </>
  );
};



export default App;

function callback(request: { location: google.maps.LatLng; radius: number; type: string[]; }, callback: any) {
  throw new Error('Function not implemented.');
}

