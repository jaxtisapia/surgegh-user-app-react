import React, {Component} from 'react'

export default class AccountSettingsSection extends Component{
    render(){
        return (
            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-width-1-2@m">

                    <h1 className="uk-heading-line uk-text-center"><span>Account Settings</span></h1>

                    <form className="uk-form-stacked">

                        <div className="uk-margin">
                            <label className="uk-form-label" for="username">Username</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="username" type="text"/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" for="email">Email</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="email" type="text"/>
                            </div>
                        </div>

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
                        <button className="uk-button bg-green-one color-white-one uk-width-3-4">Update Account</button>
                    </div>

                </div>

            </div>

    )
    }
}