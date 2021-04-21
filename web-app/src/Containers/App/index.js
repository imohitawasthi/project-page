import { connect } from 'react-redux'

import App from './Component/App'
import Actions from './../../Actions/Creators'

const mapStateToProps = (state, ownProps) => {
    return {
        menuOptions: state.master.menuOptions,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMenuOptions: () => dispatch(Actions.fetchMenuOptions()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
