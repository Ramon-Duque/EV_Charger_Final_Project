import { useEffect, useState } from 'react'
import { getStations } from '../services/Stations'
import { StationType } from '../models/Station';

export function Station() {
  const [station, setStation] = useState<StationType[]>([])

  useEffect(() => {
    getStations().then(response => response.json())
    .then(response => console.log(response))
    .then(data => setStation)
    .catch(err => console.error(err));
    
  }, []);
    
  return (
    <div>
       
       
    </div>
  )

}