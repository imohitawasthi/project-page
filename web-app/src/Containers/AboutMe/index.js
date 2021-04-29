import { connect } from 'react-redux'

import AboutMe from './Component/AboutMe'
import Actions from '../../Actions/Creators'

import Constants from './../../Assay/Constants'

const mapStateToProps = (state, ownProps) => {

    const aboutMeMetaKeys = {
        'api': ['contentType', 'content'],
        'content': ['type', 'render']
    }
    const aboutMeMeta = Constants.createContentRendererMeta(state.master.aboutMe || [], aboutMeMetaKeys)

    return {
        aboutMe: aboutMeMeta,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAboutMe: () => dispatch(Actions.fetchAboutMe()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)
