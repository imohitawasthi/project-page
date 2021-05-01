import { put, call, takeEvery } from "redux-saga/effects"

import Actions from "../Actions/Creators"
import Types from "../Actions/Types"
import Assay from "../Assay/Assay"

function* fetchMenuOptions() {
    const response = yield call(Assay.Master.fetchMenuOptions, Assay.Master)
    if (response && !!!response.error) {
        let data = response[0] || {}
        data = data.metadataContent || []

        yield put(Actions.storeMenuOptions(data))
    } else {
        yield put(Actions.storeMenuOptions([]))
    }
}

function* fetchAboutMe() {
    const response = yield call(Assay.Master.fetchAboutMe, Assay.Master)
    if (response && !!!response.error) {
        let data = response[0] || {}
        data = data.aboutMeContent || []

        yield put(Actions.storeAboutMe(data))
    } else {
        yield put(Actions.storeAboutMe([]))
    }
}

function* fetchCompletedProjects() {
    const response = yield call(Assay.Master.fetchCompletedProjects, Assay.Master)
    if (response && !!!response.error) {
        yield put(Actions.storeCompletedProjects(response))
    } else {
        yield put(Actions.storeCompletedProjects([]))
    }
}

function* fetchPendingProjects() {
    const response = yield call(Assay.Master.fetchPendingProjects, Assay.Master)
    if (response && !!!response.error) {
        yield put(Actions.storePendingProjects(response))
    } else {
        yield put(Actions.storePendingProjects([]))
    }
}

function* fetchPosts() {
    const response = yield call(Assay.Master.fetchPosts, Assay.Master)
    if (response && !!!response.error) {
        yield put(Actions.storePosts(response))
    } else {
        yield put(Actions.storePosts([]))
    }
}

function* fetchGoodReads() {
    const response = yield call(Assay.Master.fetchGoodReads, Assay.Master)
    if (response && !!!response.error) {
        yield put(Actions.storeGoodReads(response))
    } else {
        yield put(Actions.storeGoodReads([]))
    }
}

// Saga Watcher
export function* watchMaster() {
    yield* [takeEvery(Types.FETCH_MENU_OPTIONS, fetchMenuOptions)]
    yield* [takeEvery(Types.FETCH_ABOUT_ME, fetchAboutMe)]
    yield* [takeEvery(Types.FETCH_COMPLETED_PROJECTS, fetchCompletedProjects)]
    yield* [takeEvery(Types.FETCH_PENDING_PROJECTS, fetchPendingProjects)]
    yield* [takeEvery(Types.FETCH_POSTS, fetchPosts)]
    yield* [takeEvery(Types.FETCH_GOOD_READS, fetchGoodReads)]
}
