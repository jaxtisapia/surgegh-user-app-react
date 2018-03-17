import React, {Component} from "react";

export default class DemoModeInfo extends Component{

    render(){
        return (
            <h4 style={{padding: "30px"}} className="uk-text-danger uk-background-muted">SurgeGH is currently running in demo mode. In Demo mode,
            all donations are simulated. You don't use real money. We randomly simulate a failed or a successful donation, and pair Surgers.
            We do this to let our Surgers familiarize with the system before we open a "LIVE VERSION". Feel free to ask and get answers
             during this demo mode. Happy Surging!</h4>
        )
    }

}