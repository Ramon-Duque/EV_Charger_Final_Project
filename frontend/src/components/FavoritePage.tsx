import React from 'react'
import { StationFav } from './StationFav'
import '../CSS/StationFav.css'

const FavoritePage = () => {
  return (
    <div className='favDiv'>
        <h2>Favorites</h2>
        <div className='favorites'>
          <StationFav></StationFav>
        </div>
    </div>
  )
}

export default FavoritePage