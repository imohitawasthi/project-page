import { connect } from "react-redux"

import AboutMe from "./Component/AboutMe"
import Actions from "../../Actions/Creators"

const mapStateToProps = (state, ownProps) => {
    return {
        aboutMe: state.master.aboutMe,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAboutMe: () => dispatch(Actions.fetchAboutMe()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)
