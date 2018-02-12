import React, {Component} from 'react'
import {Link} from "react-router-dom";

let routes= require('../routes/routes');

export default class ForgotPassword extends Component{
    render(){
        
        return (
            <div className="uk-container sub-body">

                <div className="uk-flex uk-flex-center uk-flex-middle">


                    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-card-hover">
                        <h3 className="uk-card-title ">Forgot Password</h3>

                        <form className="uk-form-stacked">

                            <div className="uk-margin">
                                <label className="uk-form-label" for="username">Your Email</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" id="lost-email" type="text"/>
                                </div>
                            </div>


                            <button className="uk-button bg-green-one color-white-one uk-width-1-1 uk-margin-small-bottom">Retrieve Password</button>


                            <div className='uk-margin-medium-top'>
                                <p className='uk-text-meta'>Don't have an account yet? <Link class='uk-text-primary' to={routes.register.link}>Register</Link></p>
                                <p className='uk-text-meta'>Already have an account? <Link class='uk-text-primary' to={routes.login.link}>Login</Link></p>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        )
        
    }
}