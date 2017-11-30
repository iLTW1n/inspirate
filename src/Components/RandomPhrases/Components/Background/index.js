import React, { Component } from 'react';
import './styles.css';

class Background extends Component {
  
  render () {
    return (
      <div
        className='random-background'
        style={{ backgroundImage: `url(${this.props.changeImage.img})` }}
      ></div>
    )
  }
}

export default Background;