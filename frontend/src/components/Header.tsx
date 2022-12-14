import React from 'react';
import '../CSS/Header.css';
import { Link } from 'react-router-dom'
import {WiLightning} from 'weather-icons-react'
import { FcChargeBattery } from 'react-icons/fc';



export const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='nav-bar'>
            <h1 id='ECharge'><FcChargeBattery size={35}/> <> </>E Charge<WiLightning size={50} color='FFFF'/></h1>
                <ul>
                    <li><Link to={'/'}><button className='nav-button' id='home'>Home</button></Link></li>
                    <li><Link to={'/favorites'}><button className='nav-button' id='home'>Favorites</button></Link></li>
                </ul>
        </div>
    )
}