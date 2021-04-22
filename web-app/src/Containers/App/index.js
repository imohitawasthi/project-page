import { connect } from 'react-redux'

import App from './Component/App'
import Actions from './../../Actions/Creators'

const mapStateToProps = (state, ownProps) => {
    return {
        menuOptions: state.master.menuOptions,
        currentRoute: state.master.currentRoute
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeRoute: (route) => dispatch(Actions.changeRoute(route)),
        fetchMenuOptions: () => dispatch(Actions.fetchMenuOptions()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
