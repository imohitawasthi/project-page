import React from "react"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { withCookies } from "react-cookie"

import History from "./history"

import App from "./Containers/App"
import AboutMe from "./Containers/AboutMe"
import Projects from "./Containers/Projects"
import Posts from "./Containers/Posts"
import GoodReads from "./Containers/GoodReads"

const PATHS = {
    ABOUT_ME: '/about-me',
    PROJECTS: '/projects',
    POSTS: '/posts',
    GOOD_READS: '/good-reads',
}

class Routes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        const { location } = this.props
        const { pathname, search } = location || {}

        let paths = Object.keys(PATHS)
        paths = paths.map(e => e.toLowerCase())
        paths = paths.filter(e => pathname.match(e))

        if ( pathname && paths && paths[0] ) {
            History.push(`${pathname}${search || ''}`)
        }
    }

    componentDidUpdate(prevProp) {}

    render() {

        return (
            <section>
                <Switch>
                    <App>
                        <Route path={PATHS.ABOUT_ME} component={AboutMe} exact />
                        <Route path={PATHS.PROJECTS} component={Projects} exact />
                        <Route path={PATHS.POSTS} component={Posts} exact />
                        <Route path={PATHS.GOOD_READS} component={GoodReads} exact />

                        <Redirect to={PATHS.ABOUT_ME} />
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
