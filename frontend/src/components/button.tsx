import React from "react";
import { useState } from "react";
import './button.css';


function ToggleButton(){
    const[btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState(btnState => !btnState);
    }

    let toggleClassCheck = btnState ? ' active': '';
    // let toggleClassCheck = btnState ? ' active': null;


    return (
        <button
            // className="toggleClassCheck"
            className={`btn${toggleClassCheck}`}
            onClick={handleClick}
        >Toggle Class
        </button>
    )
}

// export default ToggleButton

function ToggleButtonOptionTwo(){
    const [toggle, setToggle] = useState(false)

    return(
        <div>
            <button onClick={() => setToggle(!toggle)} className="toggle-btn">Toggle</button>
            {toggle && (
                <ul>List 
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                    <li>Five</li>
                </ul>
            )}
        </div>
    )
}

export default ToggleButtonOptionTwo