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

const Main = ({match}) => (

    <div>
        <Navbar/>

        <NavigationRoutes/>
        <div className="uk-container vh-padding-20">

        <Route path={`${match.url}/:homeID`} component={MainRouter}/>
        <Route exact path={match.url} component={HomeLandingSection}/>
    </div>
    </div>
);

const MainRouter = ({match}) => {
    switch (match.params.homeID) {

        case homeRoutes.home.pathname:
            return <HomeLandingSection/>;

        case homeRoutes.settings.pathname:
            return <AccountSettingsSection/>;

        case homeRoutes.issue.pathname:
            return <SubmitIssueSection/>;

        case homeRoutes.invest.pathname:
            return <InvestSection/>;

        case homeRoutes.withdraw.pathname:
            return <WithdrawSection/>;

        case homeRoutes.transfers.pathname:
            return <TransfersSection/>;

        default:
            return <HomeLandingSection/>;

    }
};

export default Main;