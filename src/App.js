import React, {Component} from 'react';

import Login from "./components/subPages/Login";
import SignUp from "./components/subPages/SignUp";
import ForgotPassword from "./components/subPages/ForgotPassword";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Main from "./components/subPages/Main";

let routes = require('./components/routes/routes');


class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path={routes.login.link} component={Login}/>
                        <Route path={routes.register.link} component={SignUp}/>
                        <Route path={routes.forgotPassword.link} component={ForgotPassword}/>

                        <Route path={routes.main.link} component={Main}/>
                    </Switch>
                </div>
            </Router>

        );
    }
}


export default App;
