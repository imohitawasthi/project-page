import { connect } from 'react-redux'

import GoodReads from './Component/GoodReads'
import Actions from '../../Actions/Creators'

const mapStateToProps = (state, ownProps) => {
    return {
        goodReads: state.master.goodReads
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGoodReads: () => dispatch(Actions.fetchGoodReads()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodReads)
