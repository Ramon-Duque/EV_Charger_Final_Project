import React from 'react';
import '../CSS/Header.css';
import { Link } from 'react-router-dom'
import {WiLightning} from 'weather-icons-react'



export const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='nav-bar'>
            <h1 id='ECharge'>E Charge <WiLightning size={50} color='FFFF'/></h1>
                <ul>
                    <li><Link to={'/'}><button className='nav-button' id='home'>Home</button></Link></li>
                    <li><Link to={'/favorites'}><button className='nav-button' id='home'>Favorites</button></Link></li>
                </ul>
            {/* <button className='nav-button' onClick={toggleMenu}> <i className='bars'></i>Nav</button>
            <div 
            className='nav-menu'
            style={{display: showMenu ? "block" : "none"}}>
                <ul>
                    <li><Link to= "/favorites">Favorites</Link></li>
                </ul>
            </div> */}
        </div>
    )
}