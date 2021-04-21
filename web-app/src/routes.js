import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import App from "./Containers/App"
import AboutMe from "./Containers/AboutMe"
import Projects from "./Containers/Projects"
import Posts from "./Containers/Posts"
import GoodReads from "./Containers/GoodReads"

export default (
    <div>
        <Switch>
            <App>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/posts" component={Posts}/>
                <Route exact path="/good-reads" component={GoodReads}/>

                <Route path="/" component={AboutMe}/>
            </App>
        </Switch>
    </div>
)
