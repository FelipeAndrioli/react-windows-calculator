import React from 'react'
import './History.css'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'

function History() {
    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <div className='history'>
                    <Link to='#' className='history-icon'>
                        <FaIcons.FaHistory />
                    </Link>
            </div>        
        </IconContext.Provider>
        </>
    )
}

export default History