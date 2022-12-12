import React from 'react'
import { StationFav } from './StationFav'

const FavoritePage = () => {
  return (
    <div>
        <h2>Favorites</h2>
        <div className='favorites'>
          <StationFav></StationFav>
        </div>
    </div>
  )
}

export default FavoritePage