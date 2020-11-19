import React, { Component, state } from 'react'
import './Button.css'

class Button extends Component {

    sendData = () => {
        if (typeof this.props.type === 'number') {
            this.props.callBack(this.props.type)
            console.log('Selected number: ' + this.props.type)
        } else {
            console.log('Selected symbol: ' + this.props.type)
        }
    }

    render () {
        return (
            <>
            <button 
                onClick={this.sendData}
                className={
                    this.props.index === 3 ? 'blue-act' : (typeof this.props.type === 'number' ? 'number' : 'normal-act')                  
                }>
                {this.props.type}
            </button>        
            </>
        )
    }
}

export default Button