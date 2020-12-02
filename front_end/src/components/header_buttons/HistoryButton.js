import React, { Component } from 'react'
import './HistoryButton.css'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'

class HistoryButton extends Component {

    sendData = () => {
        this.props.callBack(!this.props.bottombar)
    }

    //const [bottombar, setBottombar] = useState(false)
    //const showBottombar = () => setBottombar(!bottombar)
    
    render () {
        return (
            <>
            <IconContext.Provider value={{color: 'black'}}>
                <div className='history' onClick={this.sendData}>
                        <Link to='#' className='history-icon'>
                            <FaIcons.FaHistory />
                        </Link>
                </div> 
       
            </IconContext.Provider>
            </>
        )
    }
}

export default HistoryButton