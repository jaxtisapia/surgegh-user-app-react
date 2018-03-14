import React, {Component} from "react";

export default class PendingFeeItem extends Component{
    render(){
        return (
            <div className="pending-item uk-background-muted">

                <p className="pending-donation-id">Donation ID: rtyrtryt6576-buyiuyy77-utvuy</p>

                <p className="pending-donation-title">Pay Sustainability Fee</p>

                <p className="thin-text">Your Donation of GHC 200 would only be activated once you pay for the sustainability fee of GHC 20. We sent an invoice via SMS.</p>

                <p className="thin-text">After 5 minutes, this donation request is cancelled and deleted if you do not confirm payment. Once you pay, your donation would be activated. You wait for a maximum of 3 days to get paired with a partner.</p>

                <div className="uk-flex uk-flex-center">

                    <button className="uk-button bg-ash-two uk-width-1-2">
                        Report Issue
                    </button>
                </div>

            </div>
        )
    }
};