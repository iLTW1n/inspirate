import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './styles.css';

class ButtonAddPhrase extends Component {

  handleAddPhraseClick = () => {
    alert('fsdf');
  }

  render () {
    return (
      <div className='button-add-phrase'>
        <div className='add-phrase'>
          <input type='text' placeholder='Author'/>
          <input type='text' placeholder='Phrase' />
          <input type='text' placeholder='La URL de la imagen' />
          <button>Enviar</button>
        </div>
        <button
          onClick={ this.handleAddPhraseClick }
        >ADD</button>
      </div>
    )
  }
}

export default ButtonAddPhrase;