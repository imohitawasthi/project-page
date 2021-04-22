import React, { Component } from 'react';

class AboutMe extends Component {


  constructor(props){
    super(props)
    this.state = {
      name: "Hi, I'm Mohit."
    }
  }

  componentDidMount() {
    this.props.fetchAboutMe()
  }

  render() {

    const { name } = this.state

    return (
      <div className="about-me-container">
        <div className="about-me-name">{name}</div>
      </div>
    );
  }
}

export default AboutMe;
