import React, {Component} from 'react'

let dbController = require("../controllers/database/controllers");
let getUser = dbController.getUser;

export default class SubmitIssueSection extends Component{

    constructor(props){
        super(props);

        this.state = { subject:"",
        email: "",
            phone: "",
            content: "" }
    }

    componentDidMount(){

        const userExist = !(Object.keys(getUser()).length === 0);

        if (userExist){
            const user = getUser();
            this.setState({ email: user.email, phone: user.phone });
        }

    };

    render(){
        return (
            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-width-1-2@m">

                    <h1 className="uk-heading-line uk-text-center"><span className='thin-text'>Submit an Issue</span></h1>

                    <form className="uk-form-stacked">

                        <div className="uk-margin">
                            <label className="uk-form-label" for="subject">Subject of message</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="issue-subject" type="text" value={this.state.subject}/>
                            </div>
                        </div>


                        <div className="uk-margin">
                            <label className="uk-form-label" for="email">Email</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="email" type="text" value={this.state.email}/>
                            </div>
                        </div>


                        <div className="uk-margin">
                            <label className="uk-form-label" for="phone">Phone</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="phone" type="text" value={this.state.phone}/>
                            </div>
                        </div>


                        <div className="uk-margin">
                            <label className="uk-form-label" for="detail">Details of Issue</label>
                            <textarea id="detail" className="uk-textarea" rows="5" value={this.state.content}/>
                        </div>

                    </form>

                    <div className="uk-flex uk-flex-center">
                        <button className="uk-button bg-green-one color-white-one uk-width-3-4">Submit</button>
                    </div>

                </div>

            </div>

    )
    }
}