import React, { Component } from 'react'
import axios from 'axios'

export class Login extends Component {

    state = {
        username: '',
        password: '',
        logged: false,
        logged_username: null
    }

    handleLogin = async () => {

        const login = {
            username: this.state.username,
            password: this.state.password
        }

        await axios.post('http://localhost:8080/api/login/', login, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if(response.data.status) {
                this.setState({
                    logged: response.data.status,
                    logged_username: response.data.username
                })

                alert('You are logged in! Welcome ' + this.state.logged_username);
                console.log(response.data.status);
                console.log(response.data.username);

            } else {
                this.setState({
                    logged: response.data.status,
                    logged_username: null
                })

                alert('Username or password incorrect!');
            }
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
