import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Login from '../sign_login/Login'
import Sign from '../sign_login/Sign'

class Navbar extends Component {
    
    state = {
        sidebar: false,
        form: false,
    }

    render () {
        return (
            <>
            <IconContext.Provider value={{color: 'black'}}>
                <div className='navbar' onClick={() => {this.setState({ sidebar: !(this.state.sidebar )})}}>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars />
                    </Link>
                </div> 
            </IconContext.Provider>
            <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                <button className="select-login-button" onClick={() => {this.setState({ sidebar: true, form: false })}}>Login</button>
                <button className="select-signin-button" onClick={() => {this.setState({ sidebar: true, form: true })}}>Sign In</button>
                {this.state.form ? <Sign /> : <Login />}
            </nav>
            </>
        )
    }
}


export default Navbar

