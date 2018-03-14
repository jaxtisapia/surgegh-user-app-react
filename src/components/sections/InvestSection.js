import React, {Component} from 'react'

let dbController = require("../controllers/database/controllers");
let getInvestmentPackages = dbController.getInvestmentPackages;
let getNetworks = dbController.getNetworks;

export default class InvestSection extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedInvestment: this.investmentPackages[0],
            investmentPackages: this.investmentPackages,
            networks: this.networks
        };

        this.setSelectedInvestment = this.setSelectedInvestment.bind(this);
    }

    // componentDidMount(){
    //     this.setState ({
    //         investmentPackages: getInvestmentPackages(),
    //         selectedInvestment: getInvestmentPackages()[0],
    //         networks: getNetworks(),
    //     });
    // }

    setSelectedInvestment = (e) => {
        const investmentID = e.target.value;

        let selectedInvestment = null;

        // get investment by investmentID
        this.state.investmentPackages.forEach((investment) => {
            if (investment.id === investmentID) {
                selectedInvestment = investment;
            }
        });

        if (selectedInvestment) this.setState({selectedInvestment});

    };

    render() {
        return (
            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-width-1-2@m">

                    <h1 className="uk-heading-line uk-text-center"><span className='thin-text'>Invest</span></h1>

                    <form className="uk-form-stacked">

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
                            <div className='investment-details uk-padding-small'>
                                <p>You get (within 3 days): {`${this.state.selectedInvestment.expectation} GHC`}</p>
                                <p>Cost of Investment: {`${this.state.selectedInvestment.cost} GHC`}</p>
                                <p>Attached Fee: {`${this.state.selectedInvestment.fee} GHC`}</p>

                                <p>After hitting the 'Donate Now' button. A mobile money invoice would be sent to you.
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

                            </div>
                        }

                        <hr className="uk-divider-icon uk-padding-large"/>


                        <div className="uk-margin">
                            <label className="uk-form-label">Network Type</label>
                            <div className="uk-form-controls">
                                <select className="uk-select" id="mm-network-type">

                                    {this.state.networks.map((network, i) => {
                                        return <option key={i} value={network.channel} disabled={!network.enabled}> { network.name } </option>
                                    })}

                                </select>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label">Mobile Money Number</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="mobile-money-number" type="text"
                                       placeholder="eg. 0243688339"/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" for="mobile-money-name">Full name of Mobile Mobile
                                User</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="mobile-money-name" type="text"
                                       placeholder="eg. Kwame Ayim Ahekra"></input>
                            </div>
                        </div>


                    </form>

                    <div className="uk-flex uk-flex-center">
                        <button className="uk-button bg-green-one color-white-one uk-width-1-2">Donate Now</button>
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
            name: "Vodafone Ghana",
            channel: 'vodafone',
            enabled: false,
        },
        {
            name: 'MTN Ghana',
            channel: 'mtn',
            enabled: true,
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