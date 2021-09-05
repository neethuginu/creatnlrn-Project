import React, { Component } from 'react';
import '../components/Login.css';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    inputSet = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    create = (e) => {
        e.preventDefault();
        var data = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(data)       
    }

    render() {
        return (
            <div className="login">
                <div className="log">
                    <h1>Sign In</h1>
                    <form>
                        <h5>Email</h5>
                        <input type="email" placeholder="Email" className="form-control" onChange={this.inputSet} name="email"></input>
                        <h5>Password</h5>
                        <input type="password" placeholder="Password" className="form-control" onChange={this.inputSet} name="password"></input><br />
                        <button type="submit" className="login-btn" onClick={this.create}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
