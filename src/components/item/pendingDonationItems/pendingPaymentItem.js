import React, {Component} from "react";
import Loadable from "react-loading-overlay";

let backendController = require("../../controllers/backendConnector/backend");
let backendPayDonation = backendController.payDonation;

export default class PendingPaymentItem extends Component {

    constructor(props) {
        super(props);

        this.state = {loading: false};
        this.activateLoading = this.activateLoading.bind(this);
        this.deactivateLoading = this.deactivateLoading.bind(this);
        this.payDonation = this.payDonation.bind(this);
    }

    activateLoading() {
        this.setState({loading: true})
    }

    deactivateLoading() {
        this.setState({loading: false})
    }


    payDonation() {
        this.activateLoading();

        const pairingID = this.props.pairingID;
        const investmentID = this.props.masterInvestmentID;

        backendPayDonation(pairingID, investmentID).then((response) => {
            this.deactivateLoading();
            alert("SUCCESS: Invoice sent by SMS. Please confirm to pay!");
        }).catch((err)=>{
            this.deactivateLoading();

            let error = "Unable to send SMS invoice for payment. Please check your internet connectivity!";

            try {
                error = err.response.data.message
            }
            catch (err) {
            }

            alert(`ERROR: ${error}`);
        })
    }

    render() {
        return (
            <div className="pending-item uk-background-muted">

                <p className="pending-donation-id">Donation ID: {this.props.pairingID}</p>

                <p className="pending-donation-title">Pending Donor</p>

                <p className="thin-text"> You are to donate GHC {this.props.cost} to {this.props.receiver.name}
                    - {this.props.receiver.momoNo}. We use automated payment systems. Please use the "Pay Now" button to
                    pay for this transaction</p>

                <p className="thin-text">You'd receive an SMS invoice. Confirm the payment if it matches with the amount
                    you have to pay. After successful payment, wait for a maximum of 3 days to get matched with a
                    donor.</p>

                <Loadable
                    active={this.state.loading}
                    spinner
                    text='Sending SMS invoice ...'>
                    <div className={`loader-surface ${(!this.state.loading) ? "uk-hidden" : "uk-visible"}`}>
                    </div>
                </Loadable>

                <div className="uk-flex-column uk-flex uk-flex-center">
                    <button onClick={this.payDonation}
                            className="uk-margin-bottom uk-button bg-green-one color-white-one uk-width-1-1">
                        Pay Now
                    </button>

                    {/*<button className="uk-margin-bottom uk-button bg-ash-two uk-width-1-1">*/}
                        {/*Report Issue*/}
                    {/*</button>*/}
                </div>

            </div>
        )
    }

};