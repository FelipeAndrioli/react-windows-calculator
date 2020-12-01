import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Login from '../sign_login/Login'
import Sign from '../sign_login/Sign'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const [form, setForm] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <div className='navbar' onClick={showSidebar}>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars />
                </Link>
            </div> 
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                {}
                <button className="select-login-button" onClick={() => {setForm(false)}}>Login</button>
                <button className="select-signin-button" onClick={() => {setForm(true)}}>Sign In</button>
                {form ? <Sign /> : <Login />}
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

