import Types from './Types'

// Fetch 
const fetchMenuOptions = () => ({
    type: Types.FETCH_MENU_OPTIONS
})

const fetchAboutMe = () => ({
    type: Types.FETCH_ABOUT_ME
})

const fetchCompletedProjects = () => ({
    type: Types.FETCH_COMPLETED_PROJECTS
})

const fetchPendingProjects = () => ({
    type: Types.FETCH_PENDING_PROJECTS
})

const fetchPosts = () => ({
    type: Types.FETCH_POSTS
})

const fetchGoodReads = () => ({
    type: Types.FETCH_GOOD_READS
})

//Store
const storeMenuOptions = (response) => ({
    type: Types.STORE_MENU_OPTIONS,
    response
})

const storeAboutMe = (response) => ({
    type: Types.STORE_ABOUT_ME,
    response
})

const storeCompletedProjects = (response) => ({
    type: Types.STORE_COMPLETED_PROJECTS,
    response
})

const storePendingProjects = (response) => ({
    type: Types.STORE_PENDING_PROJECTS,
    response
})

const storePosts = (response) => ({
    type: Types.STORE_POSTS,
    response
})

const storeGoodReads = (response) => ({
    type: Types.STORE_GOOD_READS,
    response
})

export default {
    // Fetch
    fetchMenuOptions,
    fetchAboutMe,
    fetchCompletedProjects,
    fetchPendingProjects,
    fetchPosts,
    fetchGoodReads,

    // Store
    storeMenuOptions,
    storeAboutMe,
    storeCompletedProjects,
    storePendingProjects,
    storePosts,
    storeGoodReads 
}