import React, { Component } from "react"
import History from "../../../history"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchMenuOptions()
    }

    renderMenu = () => {
        const { menuOptions, currentRoute } = this.props

        return menuOptions.map((element, index) => (
            <div
                className={`app-option tab ${element.url === currentRoute ? "tab-active" : ""}`}
                key={index}
                onClick={() => {
                    History.push(element.url)
                    this.props.changeRoute(element.url)
                }}
            >
                {element.label}
            </div>
        ))
    }

    render() {
        const rootClassNames = `
      container
      padding-32-64
      app-container 
      margin-n-tb-16
    `
        const { children } = this.props

        return (
            <div className={rootClassNames}>
                <div className="app-options margin-tb-16">{this.renderMenu()}</div>
                <div className="app-children margin-tb-16">{children}</div>
            </div>
        )
    }
}

export default App
