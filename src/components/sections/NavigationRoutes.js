import React, {Component} from 'react'
import {Link} from "react-router-dom";
import register from "../../registerServiceWorker";

let routes = require('../routes/routes');
let mainRoute = routes.main.link;
let homeRoutes = routes.main;

export default class NavigationRoutes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="uk-container uk-padding-small">

                <div className="uk-flex uk-flex-center">
                    <ul className="uk-breadcrumb">
                        {/*<li onClick={()=>this.props.setCurrentPage(homeRoutes.home.pathname)}><Link to={`${mainRoute}/${homeRoutes.home.pathname}`}>Home</Link></li>*/}
                        <li className="nav-route-item" onClick={()=> {this.props.setCurrentPage(homeRoutes.home.pathname)}}>
                            {/*<Link onClick={() => {this.props.setCurrentPage(homeRoutes.home.pathname)}}>*/}
                                Home
                            {/*</Link>*/}
                        </li>
                        <li className="nav-route-item" onClick={()=> {this.props.setCurrentPage(homeRoutes.invest.pathname)}}>
                            {/*<Link to={`${mainRoute}/${homeRoutes.invest.pathname}`}>*/}
                                Donate Now
                            {/*</Link>*/}
                        </li>
                        <li className="nav-route-item" onClick={()=> {this.props.setCurrentPage(homeRoutes.transfers.pathname)}}>
                            {/*<Link to={`${mainRoute}/${homeRoutes.transfers.pathname}`}>*/}
                                Transfers
                            {/*</Link>*/}
                        </li>
                        <li className="nav-route-item"  onClick={()=> {this.props.setCurrentPage(homeRoutes.issue.pathname)}}>
                            {/*<Link to={`${mainRoute}/${homeRoutes.issue.pathname}`}>*/}
                                Contact Us
                            {/*</Link>*/}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}