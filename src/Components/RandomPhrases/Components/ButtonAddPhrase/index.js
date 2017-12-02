import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './styles.css';

class ButtonAddPhrase extends Component {

  state = {
    showfade: false,
    author: '',
    phrase: '',
    theUrlImage: ''
  }

  handleAuthorChange = (e) => {
    this.setState({
      author: (e.target.value).trim()
    });
  }

  handlePhraseChange = (e) => {
    this.setState({
      phrase: (e.target.value).trim()
    });
  }

  handleUrlChange = (e) => {
    this.setState({
      theUrlImage: (e.target.value).trim()
    });
  }

  handleSendPhraseClick = () => {
    let author = this.state.author
    let phrase = this.state.phrase
    let theUrlImage = this.state.theUrlImage

    if ((author === '' || phrase === '') || theUrlImage === '' ) {
      console.log('llene el formulario')
    } else {
      this.props.addPhrase(author, phrase, theUrlImage);
    }

    this.setState({
      showfade: !this.state.showfade,
      author: '',
      phrase: '',
      theUrlImage: ''
    });
  }

  handleAddPhraseClick = () => {
    this.setState({
      showfade: !this.state.showfade
    });
  }

  render () {
    return (
      <div className='button-show-fade'>
        <CSSTransitionGroup
          transitionName='showfade'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {
            this.state.showfade &&
            <div className='show-fade'>
              <input
                onChange={ this.handleAuthorChange }
                type='text'
                placeholder='Author'
                value={ this.state.author } />
              <input
                onChange={ this.handlePhraseChange }
                type='text'
                placeholder='Phrase'
                value={ this.state.phrase } />
              <input
                onChange={ this.handleUrlChange }
                type='text'
                placeholder='The url of the image'
                value={ this.state.theUrlImage } />
              <button
                onClick={ this.handleSendPhraseClick }>Send</button>
            </div>
          }
        </CSSTransitionGroup>
        <button
          onClick={ this.handleAddPhraseClick }>{ this.state.showfade ? 'CANCEL' : 'ADD' }</button>
      </div>
    )
  }
}

export default ButtonAddPhrase;