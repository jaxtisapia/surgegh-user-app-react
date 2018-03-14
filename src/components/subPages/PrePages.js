import React, {Component} from "react"
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

let homeRoutes = require('../routes/routes').main;

export default class PrePages extends Component{

    constructor(props){
        super(props);

        this.state = { currentPage: "" };

        this.setCurrentPage = this.setCurrentPage.bind(this);
    }

    setCurrentPage(page){
        this.setState({ currentPage: page })
    }

    render(){

        let PrePage = null;

        switch (this.state.currentPage){
            case (homeRoutes.login.pathname):
                PrePage = <Login setCurrentPage={this.setCurrentPage} loggedIn = {this.props.loggedIn}/>;
                break;

            case (homeRoutes.register.pathname):
                PrePage = <SignUp setCurrentPage={this.setCurrentPage} loggedIn = {this.props.loggedIn} />;
                break;

            case (homeRoutes.forgotPassword.pathname):
                PrePage = <ForgotPassword setCurrentPage={this.setCurrentPage} loggedIn = {this.props.loggedIn} />;
                break;

            default:
                PrePage = <Login setCurrentPage={this.setCurrentPage} loggedIn = {this.props.loggedIn}/>;
                break;

        }

        return (
            <div>
            { PrePage }
            </div>
        )
    }

}