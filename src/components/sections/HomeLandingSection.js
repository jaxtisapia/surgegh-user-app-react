import React, {Component} from 'react'
import {Link} from "react-router-dom";

let routes = require('../routes/routes');
let mainRoute = routes.main.link;
let homeRoutes = routes.main

export default class HomeLandingSection extends Component{
    render(){
        return (
            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">

                    <p className="uk-card-title uk-text-meta">Total Members: 3,148</p>


                    <h4 className="text-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                    <h4 className="text-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>

                    <h3 className="uk-card-title">Default</h3>
                    <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <div className="uk-flex uk-flex-center">
                        <button className="uk-button bg-green-one color-white-one uk-width-1-2"><a className="uk-link-reset" href={`${mainRoute}/${homeRoutes.invest.pathname}`}>Invest Now</a></button>
                    </div>

                </div>

            </div>

        )
    }
}