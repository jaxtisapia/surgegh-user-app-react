import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import Loadable from "react-loading-overlay";

import logo from "../../assets/img/logo.png";

let dbController = require("../controllers/database/controllers");

let backendController = require("../controllers/backendConnector/backend");
let backendLoginUser = backendController.loginUser;
let handleLoginResponse = backendController.handleLoginRegisterResponse;

let Validator = require("../controllers/validator/validator");
let isValidUsername = Validator.isValidUsername;
let isValidPassword = Validator.isValidPassword;

let homeRoutes = require('../routes/routes').main;

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = ({loading: false, username: "", password: ""});
        this.activateLoading = this.activateLoading.bind(this);
        this.deactivateLoading = this.deactivateLoading.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.loginUser = this.loginUser.bind(this);

    }

    activateLoading() {
        this.setState({loading: true})
    }

    deactivateLoading() {
        this.setState({loading: false})
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value})
    }

    onUsernameChange(e) {
        this.setState({username: e.target.value})
    }

    loginUser(e) {
        e.preventDefault();

        const username = this.state.username.toLowerCase();
        const password = this.state.password;

        this.activateLoading();

        // check if username is valid
        if (!isValidUsername(username)) {
            this.deactivateLoading();
            alert("invalid username");
            return;
        }

        // check if password is valid
        if (!isValidPassword(password)) {
            alert("invalid password");
            this.deactivateLoading();
            return;
        }

        backendLoginUser(username, password).then((response) => {
            this.deactivateLoading();
            handleLoginResponse(response);
            this.props.loggedIn(true);
        })
            .catch((err) => {
                this.deactivateLoading();
                console.log(err);

                let error = "Unable to login. Please check your internet connectivity!";

                try {
                    error = err.response.data.message
                }
                catch (err) {
                }

                alert(error);
            });

    }

    render() {

        return (
            <Loadable
                active={this.state.loading}
                spinner
                text='Logging you in ...'>

                <div className="uk-container sub-body">

                    <div className="uk-flex uk-flex-center uk-flex-middle">

                        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-card-hover ">

                            <div className="uk-flex uk-flex-center">
                                <img className="login-image " src={logo}/>
                            </div>

                            <div className="uk-flex uk-flex-center">
                                <h3 className="uk-card-title uk-text-muted uk-text-uppercase uk-text-large login-title">
                                    SurgeGH - Login
                                </h3>
                            </div>

                            <form>

                                <div className="uk-margin">
                                    <div className="uk-inline">
                                        <span className="uk-form-icon" uk-icon="icon: user"/>
                                        <input className="uk-input uk-form-width-large" type="text"
                                               placeholder="Username" value={this.state.username}
                                               onChange={this.onUsernameChange}/>
                                    </div>
                                </div>

                                <div className="uk-margin">
                                    <div className="uk-inline">
                                        <span className="uk-form-icon" uk-icon="icon: lock"/>
                                        <input className="uk-input uk-form-width-large" type="password"
                                               placeholder="Password" value={this.state.password}
                                               onChange={this.onPasswordChange}/>
                                    </div>
                                </div>

                                <button
                                    className="uk-button bg-green-one color-white-one uk-width-1-1 uk-margin-small-bottom"
                                    onClick={this.loginUser}>
                                    Login
                                </button>

                            </form>

                            <div className="uk-flex uk-flex-center">
                                <div className='uk-margin-medium-top'>
                                    <p className='uk-text-meta'
                                       onClick={() => this.props.setCurrentPage(homeRoutes.register.pathname)}>
                                        Don't have an account yet? <span className='uk-text-primary'>Register</span></p>
                                    <p className='uk-text-meta'
                                       onClick={() => this.props.setCurrentPage(homeRoutes.forgotPassword.pathname)}>
                                        Forgot Password? <span className='uk-text-primary'>Retrieve Password</span></p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </Loadable>
        )

    }
}