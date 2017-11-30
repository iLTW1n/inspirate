import React, { Component } from 'react';
import './styles.css';

class Button extends Component {

  handleGeneratePhraseClick = () => {
    this.props.generatePhrase();
  }

  render () {
    return (
      <div className='random-button'>
        <button
          onClick={ this.handleGeneratePhraseClick }
        >
          CAMBIAR FRASE
        </button>
      </div>
    )
  }
}

export default Button;