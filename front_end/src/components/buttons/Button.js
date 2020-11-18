import React, { Component, state } from 'react'
import './Button.css'

class Button extends Component {

    constructor(props) {
        super(props) 
        
    }

    handleButtonClick = () => {
        console.log(this.props.items)
    }

    render () {
        return (
            <>
            <button 
                onClick={this.handleButtonClick}
                className={this.props.index == 3 ? 'blue-act' : (typeof this.props.type === 'number' ? 'number' : 'normal-act')}>
                {this.props.type}
            </button>        
            </>
        )
    }
}

export default Button