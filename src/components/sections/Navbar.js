import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.png';

let routes = require('../routes/routes');
let mainRoute = routes.main.link;
let homeRoutes = routes.main;

let dbControllers = require("../controllers/database/controllers");
let logoutUser = dbControllers.logoutUser;

export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = { menuVisibility:'uk-hidden'};
        this.toggleUserMenu = this.toggleUserMenu.bind(this);
    }

    toggleUserMenu(){
        if (this.state.menuVisibility==='') this.setState({menuVisibility:'uk-hidden'});
        else this.setState({menuVisibility:''})
    }

    render(){
        return (
                <div>

                <nav className="uk-navbar-container uk-margin" uk-navbar="true">
                    <div className="uk-flex uk-flex-center">

                    <div className="uk-navbar-left uk-margin-large-left">
                        <div>
                            <ul className="uk-navbar-nav">
                                <li className="uk-active"><a href="">
                                    <img className="navbar-logo-image " src={logo}/>
                                    SurgeGH
                                </a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="uk-navbar-right uk-margin-large-right">
                        <ul className="uk-navbar-nav">
                            <li>
                                {/*<a href={`${mainRoute}/${homeRoutes.settings.pathname}`}>*/}
                                <a onClick={this.toggleUserMenu}>
                                    <span className="uk-icon uk-margin-small-right" uk-icon="icon: user"/>
                                    <Ionicon icon="ios-alert" rotate={true} fontSize="35px" color="blue"/>

                                    My Account
                                </a>

                            </li>
                        </ul>
                    </div>
                    </div>

                    <div id='account-sub-menu' className={`bg-green-one color-white-one ${this.state.menuVisibility}`}>
                        <ul className="uk-list uk-list-divider">
                            <li><p onClick={()=>{
                                this.props.setCurrentPage(homeRoutes.settings.pathname);
                                this.toggleUserMenu();
                            }} className='uk-padding-small uk-text-small uk-text-center uk-text-uppercase'>
                                {/*<Link className="uk-link-reset" to={`${mainRoute}/${homeRoutes.settings.pathname}`}>*/}
                                    Account Settings
                                {/*</Link>*/}
                            </p>
                            </li>

                            <li><p onClick={()=>{
                                this.props.setCurrentPage(homeRoutes.issue.pathname);
                                this.toggleUserMenu();
                            }} className='uk-padding-small uk-text-small uk-text-center uk-text-uppercase'>
                                {/*<Link className="uk-link-reset" to={`${mainRoute}/${homeRoutes.issue.pathname}`}>*/}
                                    Submit an Issue
                                {/*</Link>*/}
                            </p>
                            </li>

                            <li><p onClick={()=>{
                                logoutUser();
                                this.props.loggedIn(false)
                            }} className='uk-padding-small uk-text-small uk-text-center uk-text-uppercase'>
                                {/*<Link className="uk-link-reset" to=''>*/}
                                    Logout
                                {/*</Link>*/}
                            </p>
                            </li>

                        </ul>
                    </div>

                </nav>

            </div>
        )
    }
}