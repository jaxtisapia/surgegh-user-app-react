import React, {Component} from 'react'
import {Link} from "react-router-dom";
import PendingDonorItem from "../item/pendingDonationItems/pendingDonorItem";
import PendingFeeItem from "../item/pendingDonationItems/pendingFeeItem";
import PendingPairItem from "../item/pendingDonationItems/pendingPairItem";
import PendingPaymentItem from "../item/pendingDonationItems/pendingPaymentItem";
import NoPendingDonation from "../item/pendingDonationItems/noPendingDonation";

let routes = require('../routes/routes');
let mainRoute = routes.main.link;
let homeRoutes = routes.main;

export default class HomeLandingSection extends Component{
    render(){
        return (
            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">

                    <p className="uk-card-title uk-text-meta">Total Members: 3,148</p>


                    <h4 style={{ padding: "30px" }} className="text-info">SurgeGH provides peer-to-peer donation avenue for people all over the world. You just have to donate per available donation plans to a partner, you would be paired with, and wait for other individuals in the community to donate to you!</h4>

                    <h3 className="uk-card-title">Pending Donations</h3>
                    <p>All your pending donations are listed here. You can  <a href="#">refresh</a> to update your pending donations.</p>

                    <div>
                        <PendingDonorItem/>
                        <PendingFeeItem/>
                        <PendingPairItem/>
                        <PendingPaymentItem/>
                        <NoPendingDonation/>
                    </div>

                    {/*<div className="uk-flex uk-flex-center">*/}
                        {/*<button className="uk-button bg-green-one color-white-one uk-width-1-2">*/}
                            {/*<a className="uk-link-reset" href={`${mainRoute}/${homeRoutes.invest.pathname}`}>*/}
                                {/*Donate Now</a></button>*/}
                    {/*</div>*/}

                </div>

            </div>

        )
    }
}