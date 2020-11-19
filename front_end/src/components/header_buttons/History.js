import React, { useState } from 'react'
import './History.css'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'

function History() {
    const [bottombar, setBottombar] = useState(false)
    const showBottombar = () => setBottombar(!bottombar)
    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <div className='history' onClick={showBottombar}>
                    <Link to='#' className='history-icon'>
                        <FaIcons.FaHistory />
                    </Link>
            </div> 
            <nav className={bottombar ? 'nav-bottom active' : 'nav-bottom'}>
                
            </nav>       
        </IconContext.Provider>
        </>
    )
}

export default History