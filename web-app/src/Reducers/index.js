import { combineReducers } from 'redux'

import MasterReducer from './MasterReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
    master: MasterReducer
})

export const persistentStoreBlacklist = [
    'master'
]
