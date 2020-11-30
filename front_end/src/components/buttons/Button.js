import React, { Component } from 'react'
import './Button.css'

class Button extends Component {

    sendData = () => {
        if (typeof this.props.type === 'number') {
            this.props.callBack(this.props.type)
        } else if (this.props.type === 'C') {
            this.props.callBack('full-delete')
        } else if (this.props.type === 'CE') {
            this.props.callBack('partial-delete')
        } else if (this.props.type === 'X') {
            this.props.callBack('*')
        } else if (typeof this.props.type === 'object') {
            if (this.props.index === 2) {
                this.props.callBack('digit-delete')
            } else if (this.props.index === 3) {
                this.props.callBack('/')
            }
        } else if (this.props.index === 3) {
                this.props.callBack(this.props.type)
        } else if (this.props.index === 0) {
                this.props.callBack('signal-change')
        } else if (this.props.index === 2) {
            this.props.callBack('dot')
        } else {
            this.props.callBack(this.props.type)
        }
    }

    render () {
        
        let classBuilder

        if (typeof this.props.type === 'number') {
            classBuilder = 'number'
        } else if (this.props.type === 'C') {
            classBuilder = 'full-delete'
        } else if (this.props.type === 'CE') {
            classBuilder = 'partial-delete'
        } else if (this.props.index === 3) {
            classBuilder = 'blue-act'
        } else if (typeof this.props.type === 'object') {
            if (this.props.index === 2) {
                classBuilder = 'normal-act digit-delete'
            } else if (this.props.index === 3) {
                classBuilder = 'normal-act division'
            }
        } else if (this.props.index === 0) {
                classBuilder = 'normal-act signal-change'
        } else {
            classBuilder = 'normal-act dot'
        }

        return (
            <>
            <button 
                onClick={this.sendData}
                className={classBuilder}>
                {this.props.type}

            </button>        
            </>
        )
    }
}

export default Button