import React, {Component} from 'react';
import Loadable from "react-loading-overlay";

let dbController = require("../controllers/database/controllers");
let getUser = dbController.getUser;

let backendController = require("../controllers/backendConnector/backend");
let backendUpdateProfile = backendController.updateUserProfile;

export default class AccountSettingsSection extends Component {

    constructor(props) {
        super(props);

        this.state = {loading: false, user: getUser(), name:getUser().name};

        this.activateLoading = this.activateLoading.bind(this);
        this.deactivateLoading = this.deactivateLoading.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
    }

    activateLoading() {
        this.setState({loading: true})
    }

    deactivateLoading() {
        this.setState({loading: false})
    }

    onNameChange(e){
        this.setState({ name: e.target.value });
    }

    updateProfile() {
        this.activateLoading();

        const name = this.state.name;
        backendUpdateProfile(name).then((response) => {
            // TODO update the database record
            this.deactivateLoading();
            alert(`SUCCESS: ${response}`);

            // update the database "user"
            const user = getUser();
            user.name = name;
            dbController.updateUser(user);

            //update this state
            this.setState({user})
        }).catch((err) => {
            this.deactivateLoading();

            let error = "Unable to update profile. Please check your internet connectivity!";

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
            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-width-1-2@m">

                    <h1 className="uk-heading-line uk-text-center"><span>Account Settings</span></h1>

                    <form className="uk-form-stacked">

                        <div className="uk-margin">
                            <label className="uk-form-label">Username</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="username" type="text" value={this.state.user.id}
                                       disabled={true}/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label">Email</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="email" type="text" value={this.state.user.email}
                                       disabled={true}/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label">Phone</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="email" type="text" value={this.state.user.phone}
                                       disabled={true}/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label">Name</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="email" type="text" onChange={this.onNameChange} value={this.state.name}/>
                            </div>
                        </div>

                    </form>

                    <Loadable
                        active={this.state.loading}
                        spinner
                        text='Updating Account ...'>
                        <div className={`loader-surface ${(!this.state.loading) ? "uk-hidden" : "uk-visible"}`}>
                        </div>
                    </Loadable>

                    <div className="uk-flex uk-flex-center">
                        <button onClick={this.updateProfile}
                                className="uk-button bg-green-one color-white-one uk-width-3-4">Update Account
                        </button>
                    </div>

                </div>

            </div>

        )
    }

}