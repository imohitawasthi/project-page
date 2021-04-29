import React, { Component } from 'react';

import ContentRenderer from './../../../Components/contentRenderer'

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

  renderAboutMeContent = () => {
    const { aboutMe } = this.props

    return <ContentRenderer meta={aboutMe}/>
  }

  render() {

    const { name } = this.state

    return (
      <div className='about-me-container'>
        <div className='about-me-name'>{name}</div>
        <div className='about-me-content'>{this.renderAboutMeContent()}</div>
      </div>
    );
  }
}

export default AboutMe;
