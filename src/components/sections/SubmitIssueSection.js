import React, {Component} from 'react'

export default class SubmitIssueSection extends Component{
    render(){
        return (
            <div className="uk-flex uk-flex-center">

                <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-width-1-2@m">

                    <h1 className="uk-heading-line uk-text-center"><span className='thin-text'>Submit an Issue</span></h1>

                    <form className="uk-form-stacked">

                        <div className="uk-margin">
                            <label className="uk-form-label" for="issue-subject">Subject of Issue</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="issue-subject" type="text"/>
                            </div>
                        </div>


                        <div className="uk-margin">
                            <textarea className="uk-textarea" rows="5" placeholder="Your message here . . ."/>
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