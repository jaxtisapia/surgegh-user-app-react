import React, {Component} from 'react';
import Loadable from "react-loading-overlay";

let dbController = require("../controllers/database/controllers");
let getInvestmentPackages = dbController.getInvestmentPackages;
let getNetworks = dbController.getNetworks;

let backendController = require("../controllers/backendConnector/backend");
let backendCreateDonation = backendController.createDonation;

let Validator = require("../controllers/validator/validator");
let isValidPhone = Validator.isValidPhone;

export default class InvestSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            selectedInvestment: this.investmentPackages[0],
            selectedNetwork: this.networks[0],
            investmentPackages: this.investmentPackages,
            networks: this.networks,
            fullName: "",
            momoNo: ""
        };

        this.setSelectedInvestment = this.setSelectedInvestment.bind(this);
        this.setSelectedNetwork = this.setSelectedNetwork.bind(this);
        this.activateLoading = this.activateLoading.bind(this);
        this.deactivateLoading = this.deactivateLoading.bind(this);
        this.onMomoNumberChange = this.onMomoNumberChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.initiateDonation = this.initiateDonation.bind(this);
    }

    componentDidMount() {

        const user = dbController.getUser();
        this.setState({fullName: user.name, momoNo: user.phone});

        const investments = dbController.getInvestmentPackages();
        if (investments.length !== 0) {
            this.setState({investmentPackages: investments, selectedInvestment: investments[0]})
        }

        const networks = dbController.getNetworks();
        if (networks.length !== 0) {
            this.setState({networks, selectedNetwork: networks[0]})
        }
    }

    activateLoading() {
        this.setState({loading: true})
    }

    deactivateLoading() {
        this.setState({loading: false})
    }

    onMomoNumberChange(e) {
      this.setState({ momoNo: e.target.value })
    };
    onNameChange(e) {
      this.setState({ fullName: e.target.value })
    };

    setSelectedInvestment = (e) => {
        const investmentID = e.target.value;

        // get investment by investmentID
        this.state.investmentPackages.forEach((investment) => {
            if (investment.id === investmentID) {
                this.setState({selectedInvestment: investment});
            }
        });
    };

    setSelectedNetwork = (e) => {
        const networkChannel = e.target.value;
        console.log(networkChannel);

        // get investment by investmentID
        this.state.networks.forEach((network) => {
            if (network.channel === networkChannel) {
                this.setState({selectedNetwork: network});
            }
        });
    };

    initiateDonation(){
        this.activateLoading();

        // check if number is valid
        if (isValidPhone(this.state.phone)){
            alert("Mobile Money Number is invalid. Please use a number with the format 0XXXXXXXXX");
            this.deactivateLoading();
            return;
        }

        const momoNo = this.state.momoNo;
        const momoChannel = this.state.selectedNetwork.channel;
        const investmentID = this.state.selectedInvestment.id ;

        backendCreateDonation(momoNo, momoChannel, investmentID).then((response) => {
            this.deactivateLoading();
            alert("Investment created successfully!!");
        }).catch((err)=> {
            this.deactivateLoading();

            let error = "Unable to create donation. Please check your internet connectivity!";

            try {
                error = err.response.data.message
            }
            catch (err) {
            }

            alert(error);
        });

        console.log({ phone: this.state.momoNo, network: this.state.selectedNetwork.channel, investment: this.state.selectedInvestment.id })
    }

    render() {
        return (
            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-width-1-2@m">

                    <h1 className="uk-heading-line uk-text-center"><span className='thin-text'>Donate Now</span></h1>

                    <form className="uk-form-stacked">

                        <div className="uk-margin">
                            <label className="uk-form-label">Network Type</label>
                            <div className="uk-form-controls">
                                <select className="uk-select" id="mm-network-type" onChange={this.setSelectedNetwork}>

                                    {this.state.networks.map((network, i) => {
                                        return <option key={i} value={network.channel}
                                                       disabled={!network.enabled}> {network.name} </option>
                                    })}

                                </select>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label">Mobile Money Number</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="mobile-money-number" type="text"
                                       placeholder="eg. 0243688339" onChange={this.onMomoNumberChange} value={this.state.momoNo}/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label">Full name of Mobile Mobile
                                User</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="mobile-money-name" type="text"
                                       onChange={this.onNameChange}
                                       placeholder="eg. Kwame Ayim Ahekra" value={this.state.fullName}/>
                            </div>
                        </div>

                        <hr className="uk-divider-icon"/>

                        <div className="uk-margin">
                            <label className="uk-form-label">Select an Investment Package</label>
                            <div className="uk-form-controls">
                                <select className="uk-select" id="investment-type"
                                        onChange={this.setSelectedInvestment}>

                                    {this.state.investmentPackages.map((investmentPackage, i) => {
                                        return <option key={i} value={investmentPackage.id}>
                                            {investmentPackage.name}
                                            - {`${investmentPackage.cost} ${investmentPackage.currency}`}
                                        </option>
                                    })}

                                </select>
                            </div>
                        </div>

                        {(this.state.selectedInvestment === null) ? null :
                            <Loadable
                                active={this.state.loading}
                                spinner
                                text='Sending you invoice via SMS ...'>

                                <div className='investment-details uk-padding-small'>
                                    <p>You get (within 3 days): {`${this.state.selectedInvestment.expectation} GHC`}</p>
                                    <p>Cost of Investment: {`${this.state.selectedInvestment.cost} GHC`}</p>
                                    <p>Attached Fee: {`${this.state.selectedInvestment.fee} GHC`}</p>

                                    <p>After hitting the 'Donate Now' button. A mobile money invoice would be sent to
                                        your phone - {this.state.momoNo} via SMS.
                                        You have to pay GHC {this.state.selectedInvestment.fee} first.
                                        Once the fee is confirmed paid, you'd be connected to another user, to pay
                                        GHC {this.state.selectedInvestment.cost} to any user we connect you to.
                                    </p>
                                    <p>
                                        However, all payments would go through us, you don't have to worry about
                                        confirmations
                                        and authenticity of the person you're sending payments to
                                    </p>
                                    <p>
                                        Within 3 days, you'll be paired up with other friends and you'd receive
                                        GHC {this.state.selectedInvestment.expectation} sent straight to your account
                                    </p>

                                    <p>We assume you are <span className="color-highlight-one">{this.state.fullName}</span>, and on <span className="color-highlight-one">{this.state.selectedNetwork.name}</span> network with phone
                                        number <span className="color-highlight-one">{this.state.momoNo}</span>. If any
                                        of these information is wrong, please change it before initiating a
                                        donation!</p>

                                </div>
                            </Loadable>
                        }

                    </form>

                    <div className="uk-margin">
                        <div className="uk-flex uk-flex-center">
                            <button onClick={this.initiateDonation} className="uk-button bg-green-one color-white-one uk-width-1-2">
                                Donate Now
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

    // get this details from a server not locally
    investmentPackages = [
        {
            cost: 100,
            expectation: 200,
            fee: 10,
            currency: 'GHC',
            id: 'one-hundred',
            name: 'Baby Pack Access'
        },
        {
            cost: 200,
            expectation: 400,
            fee: 20,
            currency: 'GHC',
            id: 'two-hundred',
            name: 'Lightweight Access'
        },
        {
            cost: 300,
            expectation: 600,
            fee: 30,
            currency: 'GHC',
            id: 'three-hundred',
            name: 'Experienced Investor Access'
        }
    ];

    networks = [
        {
            name: 'MTN Ghana',
            channel: 'mtn',
            enabled: true,
        },
        {
            name: "Vodafone Ghana",
            channel: 'vodafone',
            enabled: false,
        },
        {
            name: 'Tigo Ghana',
            channel: 'tigo',
            enabled: true,
        },
        {
            name: 'Airtel Ghana',
            channel: 'airtel',
            enabled: true
        }
    ]
}