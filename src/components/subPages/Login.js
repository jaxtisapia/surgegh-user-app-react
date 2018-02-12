import React, {Component} from 'react'
import {Link} from "react-router-dom";

let routes= require('../routes/routes');

export default class Login extends Component{
    render(){
        
        return (
            <div className="uk-container sub-body">

            <div className="uk-flex uk-flex-center uk-flex-middle">

                    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-card-hover ">
                        <h3 className="uk-card-title">Login</h3>

                        <form>

                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: user"/>
                                    <input className="uk-input uk-form-width-large" type="text" placeholder="Username or Email"/>
                                </div>
                            </div>

                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: lock"/>
                                    <input className="uk-input uk-form-width-large" type="password" placeholder="Your Password"/>
                                </div>
                            </div>

                                <Link className='uk-button bg-green-one color-white-one uk-width-1-1 uk-margin-small-bottom' to='/home'>
                                    Login
                                </Link>

                        </form>

                        <div className='uk-margin-medium-top'>
                        <p className='uk-text-meta'>Don't have an account yet? <Link class='uk-text-primary' to={routes.register.link}>Register</Link></p>
                        <p className='uk-text-meta'>Forgot Password? <Link class='uk-text-primary' to={routes.forgotPassword.link}>Retrieve Password</Link></p>
                        </div>

                    </div>


                    </div>

                </div>
        )
        
    }
}