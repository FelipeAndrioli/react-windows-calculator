import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

export class Sign extends Component {

    state = {
        username: '',
        email: '',
        password: '',
    }

    handleSignin = async () => {

        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        await axios.post('http://localhost:8080/api/SignIn', user, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            alert("Welcone " + this.state.username)
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

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {

        return (
            <div className="sign-container">
                <input type="text" placeholder="username" onChange={this.handleChangeUsername} />
                <input type="text" placeholder="email" onChange={this.handleChangeEmail} />
                <input type="password" placeholder="password" onChange={this.handleChangePassword} />
                <button className="sign-button" onClick={this.handleSignin}>Sign In</button>
            </div>
        )
    }
}

export default Sign
