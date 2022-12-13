import React from 'react';
import '../CSS/Header.css';
import { Link } from 'react-router-dom'



export const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='nav-bar'>
            <h1>Electric Vehicle Charging Stations</h1>
            <button className='nav-button' onClick={toggleMenu}> <i className='bars'></i>Nav</button>
            <div 
            className='nav-menu'
            style={{display: showMenu ? "block" : "none"}}>
                <ul>
                    <li><Link to= "/favorites">Favorites</Link></li>
                </ul>
            </div>
        </div>
    )
}