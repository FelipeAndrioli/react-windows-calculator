import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div> 
{/*            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                
    </nav> */}
        </IconContext.Provider>
        </>
    )
}

export default Navbar

