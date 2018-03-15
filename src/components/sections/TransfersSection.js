import React, {Component} from 'react';
import Loadable from "react-loading-overlay";

let backendController = require("../controllers/backendConnector/backend");
let refreshTransactions = backendController.refreshCompletedTransactions;

let dbController = require("../controllers/database/controllers");

export default class TransfersSection extends Component {

    constructor(props) {
        super(props);

        this.state = {loading: false, invoices: []};

        this.activateLoading = this.activateLoading.bind(this);
        this.deactivateLoading = this.deactivateLoading.bind(this);
        this.updateInvoices = this.updateInvoices.bind(this);
    }

    componentDidMount(){
        this.setState({ invoices: dbController.getInvoices() })
    }

    activateLoading() {
        this.setState({loading: true})
    }

    deactivateLoading() {
        this.setState({loading: false})
    }

    updateInvoices(){
        this.activateLoading();

        refreshTransactions().then((response) => {
            this.deactivateLoading();

            //update database
            dbController.updateInvoices(response.invoices);

            //update this.state
            this.setState({ invoices: response.invoices })

        }).catch((err) => {
            this.deactivateLoading();
            console.log(err);

            let error = "Unable to update completed invoices. Please check your internet connectivity!";

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

                <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-width-1-2@m">

                    <h1 className="uk-heading-line uk-text-center"><span
                        className='thin-text'>Completed Transfers</span></h1>

                    <Loadable
                        active={this.state.loading}
                        spinner
                        text='Updating completed invoices ...'>

                        <div className='investment-details bg-ash-three uk-padding-large'>

                            <div className="uk-flex uk-flex-center">
                            <p className="color-black-one">You'll find all completed invoices here. Invoices are receipts for all your transfers
                                that have been confirmed by our server. If you have made or received payments, but hasn't
                                reflected yet, please use the "Update Invoices" button below. It takes less than 20 minutes for
                             all invoices to be update.</p>
                            </div>

                            <div className="uk-flex uk-flex-center">
                            <button onClick={this.updateInvoices} className="uk-button bg-ash-two color-black-one uk-width-1-2@s">
                                Update Invoices
                            </button>
                            </div>
                        </div>

                    </Loadable>

                    <div className="uk-overflow-auto">
                        <table className="uk-table uk-table-small uk-table-divider">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Amount(GHC)</th>
                                <th>Comment</th>
                                <th>Date</th>
                            </tr>
                            </thead>

                            <tbody>

                            {
                                this.state.invoices.map((invoice, key) => {
                                    return (<tr key={key}>
                                        <td>{invoice._id}</td>
                                        <td>{(invoice.mainType === "sustainabilityFee")? invoice.amount.fee : invoice.amount.net }</td>
                                        <td>{(invoice.mainType === ("sustainabilityFee")? "SYSTEM FEE": (invoice.senderId === dbController.getUser().id)? `Paid to ${invoice.receiverId} - ${invoice.receiverMomo}` : `Received from ${invoice.senderId} - ${invoice.senderMomo}` )}</td>
                                        <td>{invoice.meta.initiatedOn}</td>
                                    </tr>)
                                })
                            }

                            </tbody>
                        </table>


                    </div>
                </div>

            </div>
        )
    }
}