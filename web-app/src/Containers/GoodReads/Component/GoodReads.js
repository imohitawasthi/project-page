import React, { Component } from "react"

import moment from "moment"

import Constants from "../../../Assay/Constants"

class GoodReads extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchGoodReads()
    }

    renderGoodReadList = () => {
        const { goodReads } = this.props
        return goodReads && goodReads.length ? goodReads.map(
            (e, i) =>
                e.goodReadName && (
                    <div className="good-read" key={i}>
                        <span
                            className="good-read-name"
                            onClick={() => {
                                window.open(e.goodReadLink, "_blank")
                            }}
                        >
                            {e.goodReadName}
                        </span>
                        <span className="good-read-date">
                        {moment(e.goodReadAddedOn).format(Constants.dateFormat)}
                        </span>
                    </div>
                )
        ) : Constants.noDataMessage()
    }

    render() {
        return (
            <div className="good-read-container">
                <div className="good-read-root">{this.renderGoodReadList()}</div>
            </div>
        )
    }
}

export default GoodReads
