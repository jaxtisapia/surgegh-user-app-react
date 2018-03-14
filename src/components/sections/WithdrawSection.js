import React, {Component} from 'react'

export default class WithdrawSection extends Component{
    render(){
        return(
            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-width-1-2@m">

                    <h1 className="uk-heading-line uk-text-center"><span className='thin-text'>Withdraw Funds</span></h1>

                    <form className="uk-form-stacked">

                        <div className='uk-text-center'>
                            <p>Pending Balance: GHC 324 </p>
                            <p>Available Balance: GHC 324 </p>
                        </div>

                        <hr className="uk-divider-icon uk-padding-large"/>

                        <div className="uk-margin">
                            <label className="uk-form-label" for="mobile-money-number">Mobile Money Number</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="mobile-money-number" type="text" value="02436883739" disabled/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" for="mobile-money-name">Full name of Mobile Mobile User</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="mobile-money-name" type="text" value="Kwame Ayim Ahekra" disabled/>
                            </div>
                        </div>

                    </form>



                    <div className="uk-flex uk-flex-center">
                        <button className="uk-button bg-green-one color-white-one uk-width-1-2">Withdraw Now</button>
                    </div>

                </div>

            </div>
        )
    }
}