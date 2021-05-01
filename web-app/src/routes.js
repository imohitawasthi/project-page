import React from "react"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { withCookies } from "react-cookie"

import history from "./history"

import App from "./Containers/App"
import AboutMe from "./Containers/AboutMe"
import Projects from "./Containers/Projects"
import Posts from "./Containers/Posts"
import GoodReads from "./Containers/GoodReads"

class Routes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidUpdate(prevProp) {}

    render() {

        return (
            <section>
                <Switch>
                    <App>
                        <Route path="/about-me" component={AboutMe} exact />
                        <Route path="/projects" component={Projects} exact />
                        <Route path="/posts" component={Posts} exact />
                        <Route path="/posts/:id" component={Posts} exact />
                        <Route path="/good-reads" component={GoodReads} exact />

                        <Redirect to="/about-me" />
                    </App>
                </Switch>
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentRoute: state.master.currentRoute,
})

const mapDispatchToProps = (dispatch) => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withCookies(Routes)))
