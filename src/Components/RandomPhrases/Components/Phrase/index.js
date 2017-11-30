import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './styles.css';

class Button extends Component {

  render () {
    return (
      <div className='random-phrase'>
        <p>{ this.props.changePhrase.phrase }</p>
        <span
          className='random-phrase-author'
        >
          { this.props.changePhrase.author }
          <Router>
            <div>
              <Link
                to='#'
                className='random-phrase-author_icons heart'  
              >
                <FontAwesome
                  name='heart'
                  aria-hidden='true'
                />
              </Link>
              <Link
                to='#'
                className='random-phrase-author_icons twitter'  
              >
                <FontAwesome
                  name='twitter'
                  aria-hidden='true'
                />
              </Link>
              <Link
                to='#'
                className='random-phrase-author_icons facebook'
              >
                <FontAwesome
                  name='facebook'
                  aria-hidden='true'
                />
              </Link>
            </div>
          </Router>
        </span>
      </div>
    )
  }
}

export default Button;