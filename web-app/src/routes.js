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

const ROUTE_MAP = {
    'about-me': <AboutMe />,
    'projects': <Projects />,
    'posts': <Posts />,
    'good-reads': <GoodReads />
}

const ROUTE_KEYS = Object.keys(ROUTE_MAP)

class Routes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentRoute: ROUTE_KEYS[0]
        }
    }

    componentDidUpdate(prevProp){
        if ( prevProp.currentRoute !== this.props.currentRoute ) {
            if ( !ROUTE_KEYS.includes(this.props.currentRoute) ) {
                history.push(ROUTE_KEYS[0])
            }else {
                this.setState({ currentRoute: this.props.currentRoute })
            }
        }
    }

    render() {
        const { currentRoute } = this.state

        return (
            <div>
                <App>
                    {ROUTE_MAP[currentRoute] || ROUTE_MAP[ROUTE_KEYS[0]]}
                </App>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentRoute: state.master.currentRoute
})

const mapDispatchToProps = (dispatch) => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withCookies(Routes)))
