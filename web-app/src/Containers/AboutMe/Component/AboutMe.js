import React, { Component } from 'react';

class AboutMe extends Component {
  
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchAboutMe()
  }

  renderMenuTabs = () => {


  }

  render() {
    return (
      <div className="about-me-container">
        
      </div>
    );
  }
}

export default AboutMe;
