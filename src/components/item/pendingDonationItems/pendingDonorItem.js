import React, {Component} from "react";

export default class PendingDonorItem extends Component{
    render(){
        return (
            <div className="pending-item uk-background-muted">

                <p className="pending-donation-id">Donation ID: rtyrtryt6576-buyiuyy77-utvuy</p>

                <p className="pending-donation-title">You have been matched to a donor</p>

                <p className="thin-text">Expect an amount of GHC 200 from Francis Abizi (02434223XX). If you do not receive the involved amount, please use the “Report Issue” button, and we’ll resolve this issue.</p>

                <div className="uk-flex uk-flex-center">

                    <button className="uk-button bg-ash-two uk-width-1-2">
                        Report Issue
                    </button>
                </div>

            </div>
        )
    }
};