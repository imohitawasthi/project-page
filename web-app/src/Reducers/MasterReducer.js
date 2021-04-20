import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Types from '../Actions/Types'

export const INITIAL_STATE = Immutable({
    menuOptions: [],
    aboutMe: [],
    completedProjects: [],
    pendingProjects: [],
    posts: [],
    goodReads: [] 
})

const storeMenuOptions = (state, action) => {
  return state.merge({
    menuOptions: action.response
  })
}

const storeAboutMe = (state, action) => {
  return state.merge({
    aboutMe: action.response
  })
}

const storeCompletedProjects = (state, action) => {
  return state.merge({
    completedProjects: action.response
  })
}

const storePendingProjects = (state, action) => {
  return state.merge({
    pendingProjects: action.response
  })
}

const storePosts = (state, action) => {
  return state.merge({
    posts: action.response
  })
}

const storeGoodReads = (state, action) => {
  return state.merge({
    goodReads: action.response
  })
}

const ACTION_HANDLERS = {
  // [Types.STORE_MENU_OPTIONS]: storeMenuOptions,
  // [Types.STORE_ABOUT_ME]: storeAboutMe,
  // [Types.STORE_COMPLETED_PROJECTS]: storeCompletedProjects,
  // [Types.STORE_PENDING_PROJECTS]: storePendingProjects,
  // [Types.STORE_POSTS]: storePosts,
  // [Types.STORE_GOOD_READS]: storeGoodReads,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
