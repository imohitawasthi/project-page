import React, { Component } from "react"

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
        return completed.map( (e, i) => (
          <div className="project" key={i}>
            <span className="project-name">{e.projectName}</span> 
            <span className="project-description">{e.projectDescription}</span>
          </div>
        ))
    }

    
    renderPendingProjects = () => {
      const { pending } = this.props

      return pending.map( (e, i) => (
        <div className="project" key={i}>
          <span className="project-name">{e.projectName}</span> 
          <span className="project-description">{e.projectDescription}</span>
        </div>
      ))
    }

    render() {
        return (
            <div className="project-container">
                <div className="project-list">
                  {this.renderCompletedProjects()}
                </div>
                <div className="project-list">
                  <div className='project-in-progress-head'>In Progress</div>
                  {this.renderPendingProjects()}
                </div>
            </div>
        )
    }
}

export default Projects
