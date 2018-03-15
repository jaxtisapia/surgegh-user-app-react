import React, {Component} from "react";

export default class PendingDonorItem extends Component{
    render(){
        return (
            <div className="pending-item uk-background-muted">

                <p className="pending-donation-id">Donation ID: {this.props.masterInvestmentID}</p>

                <p className="pending-donation-title">You have been matched to a donor</p>

                <p className="thin-text">Expect an amount of GHC {this.props.cost} from {this.props.sender.name} ({this.props.sender.momoNo}). If you do not receive the involved amount, please use the “Report Issue” button, and we’ll resolve this issue.</p>

                <div className="uk-flex uk-flex-center">

                    <button className="uk-button bg-ash-two uk-width-1-1">
                        Report Issue
                    </button>
                </div>

            </div>
        )
    }
};