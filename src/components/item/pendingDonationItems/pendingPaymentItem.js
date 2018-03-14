import React, {Component} from "react";

export default class PendingPaymentItem extends Component{
    render(){
        return (
            <div className="pending-item uk-background-muted">

                <p className="pending-donation-id">Donation ID: rtyrtryt6576-buyiuyy77-utvuy</p>

                <p className="pending-donation-title">Pending Donor</p>

                <p className="thin-text"> You are to donate GHC 300 to Rashford Aboagye - 02423423XXX. We use automated payment systems. Please use the "Pay Now" button to pay for this transaction</p>

                <p className="thin-text">You'd receive an SMS invoice. Confirm the payment if it matches with the amount you have to pay. After successful payment, wait for a maximum of 3 days to get matched with a donor.</p>

                <div className="uk-flex uk-flex-center">
                    <button className="uk-button bg-green-one color-white-one uk-width-1-2">
                        Pay Now
                    </button>

                    <button className="uk-button bg-ash-two uk-width-1-2">
                        Report Issue
                    </button>
                </div>

            </div>
        )
    }
};