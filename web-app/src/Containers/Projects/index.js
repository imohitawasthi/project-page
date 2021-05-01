import { connect } from 'react-redux'

import Projects from './Component/Projects'
import Actions from '../../Actions/Creators'

const mapStateToProps = (state, ownProps) => {
    return {
        completed: state.master.completedProjects || [],
        pending: state.master.pendingProjects || [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCompletedProjects: () => dispatch(Actions.fetchCompletedProjects()),
        fetchPendingProjects: () => dispatch(Actions.fetchPendingProjects()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
