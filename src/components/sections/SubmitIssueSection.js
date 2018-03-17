import React, {Component} from 'react'
import Loadable from "react-loading-overlay";

let dbController = require("../controllers/database/controllers");
let getUser = dbController.getUser;

let backendController = require("../controllers/backendConnector/backend");
let contactAdministrator = backendController.contactAdministrator;

export default class SubmitIssueSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            subject: "",
            email: "",
            phone: "",
            content: ""
        };

        this.activateLoading = this.activateLoading.bind(this);
        this.deactivateLoading = this.deactivateLoading.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);

        this.submitIssue = this.submitIssue.bind(this);
    }

    componentDidMount() {

        const userExist = !(Object.keys(getUser()).length === 0);

        if (userExist) {
            const user = getUser();
            this.setState({email: user.email, phone: user.phone});
        }
    };

    activateLoading() {
        this.setState({loading: true})
    }

    deactivateLoading() {
        this.setState({loading: false})
    }

    onSubjectChange = (e) => {
        this.setState({subject: e.target.value})
    };
    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    };
    onPhoneChange = (e) => {
        this.setState({phone: e.target.value})
    };
    onContentChange = (e) => {
        this.setState({content: e.target.value})
    };

    submitIssue() {
        this.activateLoading();

        const subject = this.state.subject;
        const email = this.state.email;
        const phone = this.state.phone;
        const content = this.state.content;

        contactAdministrator(subject, email, phone, content).then((response)=> {
            this.deactivateLoading();
            this.setState({ subject:"", content:"" });
            alert("SUCCESS: Successfully sent report!");
        }).catch((err)=> {
            this.deactivateLoading();

            let error = "Unable to send report. Please check your internet connectivity!";

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

                    <h1 className="uk-heading-line uk-text-center"><span className='thin-text'>Submit an Issue</span>
                    </h1>

                    <form className="uk-form-stacked">

                        <div className="uk-margin">
                            <label className="uk-form-label">Subject of message</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="issue-subject" type="text"
                                       onChange={this.onSubjectChange} value={this.state.subject}/>
                            </div>
                        </div>


                        <div className="uk-margin">
                            <label className="uk-form-label">Email</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="email" type="text" onChange={this.onEmailChange}
                                       value={this.state.email}/>
                            </div>
                        </div>


                        <div className="uk-margin">
                            <label className="uk-form-label">Phone</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="phone" type="text" onChange={this.onPhoneChange}
                                       value={this.state.phone}/>
                            </div>
                        </div>


                        <div className="uk-margin">
                            <label className="uk-form-label">Details of Issue</label>
                            <textarea id="detail" className="uk-textarea" rows="5" onChange={this.onContentChange}
                                      value={this.state.content}/>
                        </div>

                    </form>

                    <Loadable
                        active={this.state.loading}
                        spinner
                        text='Sending Report ...'>
                        <div className={`loader-surface ${(!this.state.loading) ? "uk-hidden" : "uk-visible"}`}>
                        </div>
                    </Loadable>

                    <div className="uk-flex uk-flex-center">

                        <button onClick={this.submitIssue}
                                className="uk-button bg-green-one color-white-one uk-width-3-4">
                            Submit
                        </button>
                    </div>

                </div>

            </div>

        )
    }

}