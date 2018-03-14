import React, {Component} from "react";

export default class PendingPairItem extends Component{
    render(){
        return (
            <div className="pending-item uk-background-muted">

                <p className="pending-donation-id">Donation ID: rtyrtryt6576-buyiuyy77-utvuy</p>

                <p className="pending-donation-title">Waiting to be paired</p>

                <p className="thin-text">Please be patient, we are currently working on pairing you with another user waiting for a donor</p>

                <div className="uk-flex uk-flex-center">

                    <button className="uk-button bg-ash-two uk-width-1-2">
                        Report Issue
                    </button>
                </div>

            </div>
        )
    }
};