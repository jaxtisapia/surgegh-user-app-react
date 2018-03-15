import React, {Component} from 'react'
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Loadable from "react-loading-overlay";

let homeRoutes = require('../routes/routes').main;
let Validator = require("../controllers/validator/validator");

let dbController = require("../controllers/database/controllers");

let backendController = require("../controllers/backendConnector/backend");
let backendSignupUser = backendController.signupUser;
let handleLoginResponse = backendController.handleLoginRegisterResponse;

const validatorConfig = require("../configuration/configuration").validator;
const phoneValidatorConfig = validatorConfig.phone;
const nameValidatorConfig = validatorConfig.fullName;
const usernameValidatorConfig = validatorConfig.username;
const passwordValidatorConfig = validatorConfig.password;

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            loading: false,
            username: "",
            password: "",
            fullName: "",
            email: "",
            phone: "",
            confirmPassword: ""
        });
        this.activateLoading = this.activateLoading.bind(this);
        this.deactivateLoading = this.deactivateLoading.bind(this);

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
        this.onFullNameChange = this.onFullNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);

        this.signupUser = this.signupUser.bind(this);
    }

    activateLoading() {
        this.setState({loading: true})
    }

    deactivateLoading() {
        this.setState({loading: false})
    }

    onUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    onConfirmPasswordChange(e) {
        this.setState({
            confirmPassword: e.target.value
        })
    }

    onFullNameChange(e) {
        this.setState({
            fullName: e.target.value
        })
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    onPhoneChange(e) {
        this.setState({
            phone: e.target.value
        })
    }

    signupUser(e){
        e.preventDefault();

        const username = this.state.username;
        const name = this.state.fullName;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        const phone = this.state.phone;
        const email = this.state.email;

        this.activateLoading();

        //check username
        if (!Validator.isValidUsername(username)){
            this.deactivateLoading();
            return alert(`Username is invalid. Username should be between ${usernameValidatorConfig.minLength} and ${usernameValidatorConfig.maxLength} characters long`);
        }

        // check fullName
        if (!Validator.isValidName(name)){
            this.deactivateLoading();
            return alert(`Full name is invalid. Full name should be between ${nameValidatorConfig.minLength} and ${nameValidatorConfig.maxLength} characters long`);
        }

        // check password
        if (!Validator.isValidPassword(password)){
            this.deactivateLoading();
            return alert(`Invalid Password. Password should be be between ${passwordValidatorConfig.minLength} and ${passwordValidatorConfig.maxLength} characters long`);
        }

        // check password - confirmpassowrd
        if (password !== confirmPassword){
            this.deactivateLoading();
            return alert("Passwords do not match. Please try again");
        }

        // check phone
        if (!Validator.isValidPhone(phone)){
            this.deactivateLoading();
            return alert ("Invalid Phone. Phone number must be 10 characters long, composed of only numbers, and starting with a zero")
        }

        // check email
        if (!Validator.isValidEmail(email)){
            this.deactivateLoading();
            return alert("Please enter a valid email.")
        }

        // check email spam
        if (Validator.isEmailSpam(email)){
            this.deactivateLoading();
            return alert("Email not accepted. Email with this type of domain is labelled spam. Please use a clean email eg. Gmail, Yahoo")
        }

        backendSignupUser(username, email, phone, name, password)
            .then((response) => {
            this.deactivateLoading();
            handleLoginResponse(response);
            this.props.loggedIn(true);
        })
            .catch((err) => {
            this.deactivateLoading();
            console.log(err);

            let error = "Unable to sign up. Please check your internet connectivity!";

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
                text='Signing up ...'>
                <div className="uk-container sub-body">

                    <div className="uk-flex uk-flex-center uk-flex-middle">

                        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-card-hover">

                            <div className="uk-flex uk-flex-center">
                                <img className="login-image " src={logo}/>
                            </div>

                            <div className="uk-flex uk-flex-center">
                                <h3 className="uk-card-title uk-text-muted uk-text-uppercase uk-text-large login-title">
                                    SurgeGH - Sign Up
                                </h3>
                            </div>

                            <form className="uk-form-stacked">

                                <div className="uk-margin">
                                    <label className="uk-form-label">Username</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="username" type="text"
                                               onChange={this.onUsernameChange} value={this.state.username}/>
                                    </div>
                                </div>

                                <div className="uk-margin">
                                    <label className="uk-form-label">Full Name</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="fullName" type="text"
                                               onChange={this.onFullNameChange} value={this.state.fullName}/>
                                    </div>
                                </div>

                                <div className="uk-margin">
                                    <label className="uk-form-label">Email</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="email" type="text" onChange={this.onEmailChange}
                                               value={this.state.email}/>
                                    </div>
                                </div>

                                <div className="uk-margin">
                                    <label className="uk-form-label">Phone Number</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="phone" type="text" onChange={this.onPhoneChange}
                                               value={this.state.phone}/>
                                    </div>
                                </div>

                                <div className="uk-margin">
                                    <label className="uk-form-label">Password</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="password" type="password"
                                               onChange={this.onPasswordChange} value={this.state.password}/>
                                    </div>
                                </div>

                                <div className="uk-margin">
                                    <label className="uk-form-label">Confirm Password</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="confirm-password" type="password"
                                               onChange={this.onConfirmPasswordChange}
                                               value={this.state.confirmPassword}/>
                                    </div>
                                </div>

                                    <button onClick={this.signupUser}
                                        className="uk-button bg-green-one color-white-one uk-width-1-1 uk-margin-small-bottom">
                                        Sign Up
                                    </button>

                            </form>

                            <div className="uk-flex uk-flex-center">
                                <div className='uk-margin-medium-top'>
                                    <p onClick={() => this.props.setCurrentPage(homeRoutes.login.pathname)} className='uk-text-meta'>Already have an account?
                                        <span className='uk-text-primary'>Login</span>
                                    </p>
                                    <p onClick={() => this.props.setCurrentPage(homeRoutes.forgotPassword.pathname)} className='uk-text-meta'>Forgot Password?
                                        <span className='uk-text-primary'>Retrieve
                                            Password</span></p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Loadable>
        )

    }
}