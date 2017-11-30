import React, { Component } from 'react';
import moment from 'moment';
import './styles.css';

class Time extends Component {

  state = {
    hour: '00:00:00',
  }

  componentDidMount = () => {
    let hour = setInterval(this.timer, 100);
    this.setState({
      hour,
    });
  }

  componentWillUnmount = () => {
    clearInterval(this.state.hour);
  }

  timer = () => {
    this.setState({
      hour: moment().format('hh:mm a'),
    });
  }

  render () {
    return (
      <div className='time'>
        <div className='hour'>{ this.state.hour }</div>
      </div>
    )
  }
}

export default Time;