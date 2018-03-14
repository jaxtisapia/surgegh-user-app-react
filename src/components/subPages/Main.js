import React, {Component} from 'react'
import {Route} from "react-router-dom";
import HomeLandingSection from "../sections/HomeLandingSection";
import AccountSettingsSection from "../sections/AccountSettingsSection";
import SubmitIssueSection from "../sections/SubmitIssueSection";
import Navbar from "../sections/Navbar";
import NavigationRoutes from "../sections/NavigationRoutes";
import InvestSection from "../sections/InvestSection";
import WithdrawSection from "../sections/WithdrawSection";
import TransfersSection from "../sections/TransfersSection";

let homeRoutes = require('../routes/routes').main;

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = ({currentPage: ""});

        this.setCurrentPage= this.setCurrentPage.bind(this);
    }

    setCurrentPage = (page) => {
        this.setState({ currentPage:page })
    };

    render() {

        let MainSubPage = null;

        switch (this.state.currentPage) {

            case homeRoutes.home.pathname:
                MainSubPage = <HomeLandingSection  setCurrentPage={this.setCurrentPage}/>;
                break;

            case homeRoutes.settings.pathname:
                MainSubPage = <AccountSettingsSection setCurrentPage={this.setCurrentPage}/>;
                break;

            case homeRoutes.issue.pathname:
                MainSubPage = <SubmitIssueSection setCurrentPage={this.setCurrentPage}/>;
                break;

            case homeRoutes.invest.pathname:
                MainSubPage = <InvestSection setCurrentPage={this.setCurrentPage}/>;
                break;

            case homeRoutes.withdraw.pathname:
                MainSubPage = <WithdrawSection setCurrentPage={this.setCurrentPage}/>;
                break;

            case homeRoutes.transfers.pathname:
                MainSubPage = <TransfersSection setCurrentPage={this.setCurrentPage}/>;
                break;

            default:
                MainSubPage = <HomeLandingSection setCurrentPage={this.setCurrentPage}/>;
                break;

        }

        return (
            <div>
                <Navbar loggedIn={this.props.loggedIn} setCurrentPage={this.setCurrentPage}/>

                <NavigationRoutes  setCurrentPage={this.setCurrentPage}/>
                <div className="uk-container vh-padding-20">

                    {MainSubPage}

                </div>
            </div>
        )
    }
}

