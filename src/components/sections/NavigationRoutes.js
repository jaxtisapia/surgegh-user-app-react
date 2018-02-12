import React, {Component} from 'react'
import {Link} from "react-router-dom";
import register from "../../registerServiceWorker";

let routes = require('../routes/routes');
let mainRoute = routes.main.link;
let homeRoutes = routes.main;

export default class NavigationRoutes extends Component{
    render(){
        return (
            <div className="uk-container uk-padding-small">
                {console.log(homeRoutes)}
                <div className="uk-flex uk-flex-center">
                    <ul className="uk-breadcrumb">
                        <li><Link to={`${mainRoute}/${homeRoutes.home.pathname}`}>Home</Link></li>
                        <li><Link to={`${mainRoute}/${homeRoutes.invest.pathname}`}>Invest</Link></li>
                        <li><Link to={`${mainRoute}/${homeRoutes.withdraw.pathname}`}>Withdraw</Link></li>
                        <li><Link to={`${mainRoute}/${homeRoutes.transfers.pathname}`}>Transfers</Link></li>
                    </ul>
                </div>
                </div>
        )}}