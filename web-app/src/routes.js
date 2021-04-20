import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import App from "./Containers/App"

export default (
    <div>
        <Switch>
            <App>
                <Route path="/"></Route>
            </App>
        </Switch>
    </div>
)
