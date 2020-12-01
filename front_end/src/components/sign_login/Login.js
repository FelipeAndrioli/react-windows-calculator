import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="password"></input>
                <button className="login-button">Login</button>
            </div>
        )
    }
}

export default Login
