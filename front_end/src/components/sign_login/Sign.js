import React, { Component } from 'react'
import './style.css'

export class Sign extends Component {
    render() {
        return (
            <div className="sign-container">
                <input type="text" placeholder="username"></input>
                <input type="text" placeholder="email"></input>
                <input type="password" placeholder="password"></input>
                <button className="sign-button">Sign In</button>
            </div>
        )
    }
}

export default Sign
