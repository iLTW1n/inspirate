import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './styles.css';

class Button extends Component {

  state = {
    showAuthor: false
  }

  handleShowAuthorMouseEnter = () => {
    this.setState({
      showAuthor: true
    });
  }

  handleHideAuthorMouseLeave = () => {
    this.setState({
      showAuthor: false
    });
  }

  render () {
    return (
      <div
        onMouseEnter={ this.handleShowAuthorMouseEnter }
        onMouseLeave={ this.handleHideAuthorMouseLeave }
        className='random-phrase'
      >
        <p>{ this.props.changePhrase.phrase }</p>
        <span
          className={ this.state.showAuthor ? 'random-phrase-author show' : 'random-phrase-author hide'}
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
                target='_blank'
                to={`https://twitter.com/intent/tweet?text=${this.props.changePhrase.phrase}&amp;url=https://josktgui.github.io/inspire-phrases/&amp;via=JOsktguiH`}
                className='random-phrase-author_icons twitter'  
              >
                <FontAwesome
                  name='twitter'
                  aria-hidden='true'
                />
              </Link>
              <Link
                target='_blank'
                to={`https://www.facebook.com/sharer/sharer.php?u=https://josktgui.github.io/inspire-phrases/`}
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