import { connect } from 'react-redux'

import Posts from './Component/Posts'
import Actions from '../../Actions/Creators'

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.master.posts || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(Actions.fetchPosts()), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
