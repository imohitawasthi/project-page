import React, { Component } from "react"
import Constants from "../../../Assay/Constants"

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchCompletedProjects()
        this.props.fetchPendingProjects()
    }

    renderCompletedProjects = () => {
        const { completed } = this.props
        return completed && completed.length
            ? completed.map((e, i) => (
                  <div className="project" key={i}>
                      <span
                          className="project-name"
                          onClick={() => {
                              window.open(e.projectLinkGit, "_blank")
                          }}
                      >
                          {e.projectName}
                      </span>
                      <span className="project-description">{e.projectDescription}</span>
                  </div>
              ))
            : Constants.noDataMessage()
    }

    renderPendingProjects = () => {
        const { pending } = this.props
        return pending.map((e, i) => (
            <div className="project" key={i}>
                <span
                    className="project-name"
                    onClick={() => {
                        window.open(e.projectLinkGit, "_blank")
                    }}
                >
                    {e.projectName}
                </span>
                <span className="project-description">{e.projectDescription}</span>
            </div>
        ))
    }

    render() {
        const { pending } = this.props

        return (
            <div className="project-container">
                <div className="project-list">{this.renderCompletedProjects()}</div>
                <div className="project-list">
                    {pending && pending.length ? (
                        <div>
                            <div className="project-in-progress-head">In Progress</div>
                            {this.renderPendingProjects()}
                        </div>
                    ) : null}
                </div>
            </div>
        )
    }
}

export default Projects
