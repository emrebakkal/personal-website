import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/navbar.css'
import { MdOutlineDarkMode } from 'react-icons/md';
import { RiSunLine } from 'react-icons/ri';

function Navbar() {

  const [isDark , setIsDark] = useState(false);
  const [logo, setLogo] = useState('dark');



  return (
    <div>
        <ul>
            <li>
                <NavLink className="link" to="/">Emre Bakkal</NavLink>
            </li>

            <li>
                <NavLink  to="#" id='darkButton' onClick={
                  () => {
                    if (!isDark) {
                    
                      document.body.className = 'dark';
                      setIsDark(true);
                      setLogo('light');

                      
                    }
                    else {
                      document.body.className = '';
                      setIsDark(false);
                      setLogo('dark');
                    }

                    
                    
                  }
                }>
                {logo === 'dark' ? <MdOutlineDarkMode /> : <RiSunLine />}  
                  
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar