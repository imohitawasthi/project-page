import React, { Component } from "react"

import History from "../../../history"

import moment from "moment"
import Constants from "../../../Assay/Constants"
import ContentRenderer from "../../../Components/contentRenderer"

import iconGoBack from "../../../Theme/icons/go-back.svg"

const VIEWS = {
    LIST: "list",
    POST: "post",
}

const META_KEYS = {
    api: ["contentType", "content"],
    content: ["type", "render"],
}

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentView: VIEWS.LIST,
            currentPost: null,
        }
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    componentDidUpdate(prevProps, prevState) {
        this.checkPostChange(prevProps, prevState)
    }

    checkPostChange(prevProps, prevState) {
        const { posts, location } = this.props
        const { currentPost, currentView } = this.state

        if (location.pathname.match(/post/g) && posts && posts.length) {
            let postID = location.search.split("=")
            postID = postID && postID[1]

            postID = posts.filter((e) => e._id === postID)

            postID = postID && postID.length ? postID[0]._id : null

            if (currentPost !== postID) {
                this.setState({ currentPost: postID, currentView: postID ? VIEWS.POST : VIEWS.LIST })
            }
        }
    }

    renderPostList = () => {
        const { posts } = this.props

        return posts && posts.length ? posts.map(
            (e, i) =>
                e.postDescription && (
                    <div className="post" key={i}>
                        <span
                            className="post-description"
                            onClick={() => {
                                History.push(`/posts?id=${e._id}`)
                            }}
                        >
                            {e.postDescription}
                        </span>
                        <span className="post-date">{moment(e.postPublishedOn).format(Constants.dateFormat)}</span>
                    </div>
                )
        ) : Constants.noDataMessage()
    }

    renderPost = () => {
        const { currentPost } = this.state

        const { posts } = this.props
        let post = posts && posts.length ? posts.filter((e) => e._id === currentPost) : []
        post = post && post.length ? post[0] : {}

        const meta = Constants.createContentRendererMeta(post.postContent || [], META_KEYS)

        return (
            <div className="post">
                <div className="post-name"></div>
                <div className="post-content">
                    <ContentRenderer meta={meta} />
                </div>
            </div>
        )
    }

    render() {
        const { currentView } = this.state

        const renderMap = {
            [VIEWS.LIST]: this.renderPostList(),
            [VIEWS.POST]: this.renderPost(),
        }

        return (
            <div className="post-container">
                <div className="post-root">{renderMap[currentView] || ""}</div>
            </div>
        )
    }
}

export default Posts
