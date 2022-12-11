import React from 'react';
import { StationInfo } from '../models/Station';
import '../CSS/Marker.css';

const Marker = (props: any) => {
    const { color, name, id } = props;
    const markerClick = () => {
      console.log('You clicked on marker ' + {name})
    }
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
        onClick={markerClick}
      />
    );
  };

export default Marker;
