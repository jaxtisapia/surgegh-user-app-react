import React, {Component} from 'react'
import {Link} from "react-router-dom";

let routes= require('../routes/routes');

export default class SignUp extends Component{
    render(){
        
        return (
            <div className="uk-container sub-body">

                <div className="uk-flex uk-flex-center uk-flex-middle">

                    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-card-hover">
                        <h3 className="uk-card-title">Sign Up</h3>

                        <form className="uk-form-stacked">

                            <div className="uk-margin">
                                <label className="uk-form-label" for="username">Username</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="username" type="text"/>
                                </div>
                            </div>

                            <div className="uk-margin">
                                <label className="uk-form-label" for="email">Email</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="email" type="text"/>
                                </div>
                            </div>

                            <div className="uk-margin">
                                <label className="uk-form-label" for="password">Password</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="password" type="text"/>
                                </div>
                            </div>

                            <div className="uk-margin">
                                <label className="uk-form-label" for="confirm-password">Confirm Password</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="confirm-password" type="text"/>
                                </div>
                            </div>

                            <button className="uk-button bg-green-one color-white-one uk-width-1-1 uk-margin-small-bottom">Sign Up</button>

                        </form>

                        <div className='uk-margin-medium-top'>
                            <p className='uk-text-meta'>Already have an account? <Link class='uk-text-primary' to={routes.login.link}>Login</Link></p>
                            <p className='uk-text-meta'>Forgot Password? <Link class='uk-text-primary' to={routes.forgotPassword.link}>Retrieve Password</Link></p>
                        </div>

                    </div>

                </div>
            </div>
        )
        
    }
}