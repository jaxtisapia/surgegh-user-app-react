import React, {Component} from 'react';

import Login from "./components/subPages/Login";
import SignUp from "./components/subPages/SignUp";
import ForgotPassword from "./components/subPages/ForgotPassword";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Main from "./components/subPages/Main";
import PrePages from "./components/subPages/PrePages";

let routes = require('./components/routes/routes');

let dbControllers = require("./components/controllers/database/controllers");

class App extends Component {

    constructor(props) {
        super(props);

        this.state = ({loggedIn: false});

        this.loggedIn = this.loggedIn.bind(this);
    }

    componentWillMount() {
        // check if user and session exist
        const userExist = !(Object.keys(dbControllers.getUser()).length === 0);
        const sessionExist = !(dbControllers.getSession() === undefined);

        if (userExist && sessionExist) {
            this.setState({loggedIn: true})
        }
    }

    loggedIn(status) {
        this.setState({loggedIn: status})
    }


    render() {
        return (
            <Router>
                <div>

                    <Switch>
                        <Route exact path="/" render={() => (this.state.loggedIn) ? <Main loggedIn={this.loggedIn}/> :
                            <PrePages loggedIn={this.loggedIn}/>}/>

                        {/*<Route path={routes.login.link} render={() => <Login loggedIn={this.loggedIn}/>}/>*/}
                        {/*<Route path={routes.register.link} render={() => <SignUp loggedIn={this.loggedIn}/>}/>*/}
                        {/*<Route path={routes.forgotPassword.link} render={() => <ForgotPassword/>}/>*/}

                        {/*<Route path={routes.main.link} component={Main}/>*/}
                    </Switch>
                </div>
            </Router>

        );
    }
}


export default App;
