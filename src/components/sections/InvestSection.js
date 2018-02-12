import React, {Component} from 'react'



export default class InvestSection extends Component{

    constructor(props){
        super(props);
        this.state = {selectedInvestment:this.investmentPackages[0]};

        this.setSelectedInvestment = this.setSelectedInvestment.bind(this);
    }

    setSelectedInvestment = (e)=> {
        console.log(e.value);
        // this.setState({selectedInvestment:investment})
    };

    render(){
        return(
            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-width-1-2@m">

                    <h1 className="uk-heading-line uk-text-center"><span  className='thin-text'>Invest</span></h1>

                    <form className="uk-form-stacked">

                        <div className="uk-margin">
                            <label className="uk-form-label" for="investment-type">Select an Investment Package</label>
                            <div className="uk-form-controls">
                                <select className="uk-select" id="investment-type"  onChange={this.setSelectedInvestment}>

                                    {this.investmentPackages.map((investmentPackage, i)=>{
                                        return <option key={i} value={i}>
                                            {investmentPackage.name} : {`${investmentPackage.cost} ${investmentPackage.currency}`}
                                            </option>
                                    })}

                                </select>
                            </div>
                        </div>

                        { (this.state.selectedInvestment===null)? null:
                        <div className='investment-details uk-padding-small'>
                            <p>You get (within 7 days):  {`${this.state.selectedInvestment.expectation} GHC`}</p>
                            <p>Cost of Investment:  {`${this.state.selectedInvestment.cost} GHC`}</p>
                            <p>Attached Fee:  {`${this.state.selectedInvestment.fee} GHC`}</p>

                            <p>After hitting the 'Invest Now' button. A mobile money invoice would be sent to you.
                                You have to pay GHC {this.state.selectedInvestment.fee} first.
                                Once the fee is confirmed paid, you'd be connected to another user, to pay
                                GHC {this.state.selectedInvestment.cost} to any user we connect you to.
                            </p>
                            <p>
                                However, all payments would go through us, you don't have to worry about confirmations
                                and authenticity of the person you're sending payments to
                            </p>
                            <p>
                                Within 7 days, you'll be paired up with other friends and you'd receive
                                GHC {this.state.selectedInvestment.expectation} sent straight to your account
                            </p>

                        </div>
                        }

                        <hr className="uk-divider-icon uk-padding-large"/>


                        <div className="uk-margin">
                            <label className="uk-form-label" for="mm-network-type">Network Type</label>
                            <div className="uk-form-controls">
                                <select className="uk-select" id="mm-network-type">
                                    <option>MTN Mobile Money</option>
                                    <option>Tigo Cash</option>
                                    <option>Vodafone Cash</option>
                                    <option>Airtel Money</option>
                                </select>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" for="mobile-money-number">Mobile Money Number</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="mobile-money-number" type="text" placeholder="eg. 0243688339"/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" for="mobile-money-name">Full name of Mobile Mobile User</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="mobile-money-name" type="text" placeholder="eg. Kwame Ayim Ahekra"></input>
                            </div>
                        </div>


                    </form>

                    <div className="uk-flex uk-flex-center">
                        <button className="uk-button bg-green-one color-white-one uk-width-1-2">Invest Now</button>
                    </div>

                </div>

            </div>
        )
    }

    // get this details from a server not locally
    investmentPackages = [
        {
            id:"lightweight-investor",
            name:"Lightweight Investor",
            enabled:true,
            cost:100,
            expectation:200,
            fee:10,
            currency:"GHC"
        },
        {
            id:"mediumweight-investor",
            name:"Mediumweight Investor",
            enabled:true,
            cost:200,
            expectation:400,
            fee:20,
            currency:"GHC"
        },
        {
            id:"heavyweight-investor",
            name:"Heavyweight Investor",
            enabled:true,
            cost:400,
            expectation:800,
            fee:40,
            currency:"GHC"
        }
    ];
}