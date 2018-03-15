import React, {Component} from "react";
import {Link} from "react-router-dom";
let routes = require('../../routes/routes');
let mainRoute = routes.main.link;
let homeRoutes = routes.main;

export default class NoPendingDonation extends Component{
    render(){
        return (
            <div className="pending-item uk-background-muted">

                <p className="pending-donation-title">You have no pending Donations</p>

                <p className="thin-text">Some cool text here!</p>

                <div className="uk-flex uk-flex-center">

                    {/*<Link to={`${mainRoute}/${homeRoutes.invest.pathname}`}>*/}
                    <button onClick={()=>{this.props.setCurrentPage(homeRoutes.invest.pathname)}} className="uk-button bg-green-one color-white-one uk-width-1-1">
                            Donate Now
                        </button>
                    {/*</Link>*/}

                </div>

            </div>
        )
    }
};