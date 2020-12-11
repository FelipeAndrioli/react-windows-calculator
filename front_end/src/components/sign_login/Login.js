import React, { Component } from 'react'
import axios from 'axios'

export class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    handleLogin = async () => {

        const login = {
            username: this.state.username,
            password: this.state.password
        }

        await axios.post('http://localhost:8080/api/Login', login, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            alert("Loged in with success! Welcome " + this.state.username)
        })
        .catch(function(error) {
            alert(error)
        })
    }

    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div className="login-container">
                <input type="text" placeholder="username" onChange={this.handleChangeUsername} />
                <input type="password" placeholder="password" onChange={this.handleChangePassword} />
                <button className="login-button" onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login
