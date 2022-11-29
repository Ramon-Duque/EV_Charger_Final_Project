import React, { useState } from 'react';
import './App.css';
import { useRef, useEffect } from 'react';
import { Place } from './models/Place';
import { getPlaces } from '../src/services/apiPull';
function App() {
  const [places, setPlaces] = useState<Place>();
  useEffect(() => {
    getPlaces().then((res) => {
      const {data} = res;
      setPlaces(data);
      console.log(res.data);
    })
  }, []);
  return (
    <div className="App">
      <header>Hi</header>
    </div>
  );
}
export default App;

