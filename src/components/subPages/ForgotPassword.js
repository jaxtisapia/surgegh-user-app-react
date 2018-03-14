import React, {Component} from 'react'
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Modal from 'react-awesome-modal';

import Loadable from "react-loading-overlay";

let homeRoutes = require('../routes/routes').main;

export default class ForgotPassword extends Component{

    constructor(props) {
        super(props);

        this.state = ({
            loading: false,
            email: "",
        });
        this.activateLoading = this.activateLoading.bind(this);
        this.deactivateLoading = this.deactivateLoading.bind(this);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.retrieveUserPassword = this.retrieveUserPassword.bind(this);
    }

    activateLoading() {
        this.setState({loading: true})
    }

    deactivateLoading() {
        this.setState({loading: false})
    }

    onEmailChange(e){
        this.setState({ email: e.target.value })
    }

    retrieveUserPassword(e){
        e.preventDefault();

        this.activateLoading()
    }

    render(){
        
        return (
            <Loadable
                active={this.state.loading}
                spinner
                text='Retrieving Password ...'>

            <div className="uk-container sub-body">

                <div className="uk-flex uk-flex-center uk-flex-middle">


                    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-card-hover">

                        <div className="uk-flex uk-flex-center">
                            <img className="login-image " src={logo}/>
                        </div>

                        <div className="uk-flex uk-flex-center">
                            <h3 className="uk-card-title uk-text-muted uk-text-uppercase uk-text-large login-title">
                                SurgeGH - Forgot Password
                            </h3>
                        </div>

                        <h4 className="text-info forgot-password-description">Enter your email address and we'll send you a token to reset your password</h4>

                        <form className="uk-form-stacked">

                            <div className="uk-margin">
                                <label className="uk-form-label" for="username">Your Email</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="lost-email" type="text"/>
                                </div>
                            </div>

                            <button onClick={this.retrieveUserPassword} className="uk-button bg-green-one color-white-one uk-width-1-1 uk-margin-small-bottom">
                                Retrieve Password
                            </button>

                            <div className="uk-flex uk-flex-center">
                            <div className='uk-margin-medium-top'>
                                <p onClick={() => this.props.setCurrentPage(homeRoutes.register.pathname)} className='uk-text-meta'>Don't have an account yet? <span className='uk-text-primary'>Register</span></p>
                                <p onClick={() => this.props.setCurrentPage(homeRoutes.login.pathname)} className='uk-text-meta'>Already have an account? <span className='uk-text-primary'>Login</span></p>
                            </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            </Loadable>
        )
        
    }
}