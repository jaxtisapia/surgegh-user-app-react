import React, {Component} from 'react'
import {Link} from "react-router-dom";
import Loadable from "react-loading-overlay";

import PendingDonorItem from "../item/pendingDonationItems/pendingDonorItem";
import PendingFeeItem from "../item/pendingDonationItems/pendingFeeItem";
import PendingPairItem from "../item/pendingDonationItems/pendingPairItem";
import PendingPaymentItem from "../item/pendingDonationItems/pendingPaymentItem";
import NoPendingDonation from "../item/pendingDonationItems/noPendingDonation";

let routes = require('../routes/routes');
let mainRoute = routes.main.link;
let homeRoutes = routes.main;

let dbController = require("../controllers/database/controllers");
let getPendingDonations = dbController.getPendingDonations;

let backendController = require("../controllers/backendConnector/backend");
let backendRefreshDonations = backendController.refreshPendingDonations;

export default class HomeLandingSection extends Component {

    constructor(props) {
        super(props);

        this.state = {pendingDonations: [], loading: false};

        this.activateLoading = this.activateLoading.bind(this);
        this.deactivateLoading = this.deactivateLoading.bind(this);
    }

    componentDidMount() {
        const pendingDonations = getPendingDonations();
        this.setState({pendingDonations});

        this.refreshPendingDonations = this.refreshPendingDonations.bind(this);
    }

    activateLoading() {
        this.setState({loading: true})
    }

    deactivateLoading() {
        this.setState({loading: false})
    }


    refreshPendingDonations() {
        this.activateLoading();

        backendRefreshDonations().then((response) => {
            this.deactivateLoading();

            //update database
            dbController.updatePendingDonations(response);
            console.log(dbController.getPendingDonations());

            //update this.state
            this.setState({pendingDonations: response})

        })
            .catch((err) => {
                this.deactivateLoading();

                let error = "Unable to update pending donations. Please check your internet connectivity!";

                try {
                    error = err.response.data.message
                }
                catch (err) {
                }

                alert(error);
            })
    }

    render() {

        return (

            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">

                    {/*<p className="uk-card-title uk-text-meta">Total Members: 3,148</p>*/}

                    <Loadable
                        active={this.state.loading}
                        spinner
                        text='Updating Pending Donations ...'>

                        <h4 style={{padding: "30px"}} className="text-info">SurgeGH provides peer-to-peer donation
                            avenue for people all over the world. You just have to donate per available donation plans
                            to a partner, you would be paired with, and wait for other individuals in the community to
                            donate to you!</h4>
                    </Loadable>

                    <h3 className="uk-card-title">Pending Donations</h3>
                    <p>All your pending donations are listed here. You can <a onClick={this.refreshPendingDonations}>refresh </a>
                        to update your pending donations.</p>

                    <div>

                        { (Object.keys(this.state.pendingDonations).length === 0) ?
                            <NoPendingDonation setCurrentPage={this.props.setCurrentPage}/> :
                            <this.DisplayPendingDonations/>}

                    </div>

                </div>

            </div>
        )
    }

    DisplayPendingDonations() {
        const pendingDonations = dbController.getPendingDonations();
        return (
            <div>
                {pendingDonations.pairings.map((pendingDonation, i) => {
                    return <PendingPaymentItem key={i} {...pendingDonation}/>
                })}

                {pendingDonations.pendings.map((pendingDonation, i) => {
                    return <PendingDonorItem key={i} {...pendingDonation}/>
                })}

                {pendingDonations.investments.map((pendingDonation, i) => {

                    if (pendingDonation.status.feesPaid){
                        return <PendingPairItem key={i} {...pendingDonation}/>
                    }
                    else{
                        return <PendingFeeItem key={i} {...pendingDonation}/>
                    }

                })}

            </div>)
    }
}
