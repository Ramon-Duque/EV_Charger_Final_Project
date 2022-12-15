
import '../CSS/Header.css';
import { Link } from 'react-router-dom'
import {BsLightningChargeFill} from 'react-icons/bs';


export const Header = () => {
    
    

    return (
        <div className='nav-bar'>
            <div className='title'>
            <div className='battery'>
           <div className='battery-head'></div>
             <div className='battery-body'>
               <i><BsLightningChargeFill/></i>
               <div className='charge'></div>
           </div>
         </div>
            <h1 id='ECharge'>E-Charge</h1></div>
                <ul>
                    <li><Link to={'/'}><button className='nav-button' id='home'>Home</button></Link></li>
                    <li><Link to={'/favorites'}><button className='nav-button' id='home'>Favorites</button></Link></li>
                </ul>
        </div>
    )
}