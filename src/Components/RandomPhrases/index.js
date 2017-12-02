import React, { Component } from 'react';
import './styles.css';

import Background from './Components/Background';
import Time from './Components/Time';
import Phrase from './Components/Phrase';
import Button from './Components/Button';
import ButtonAddPhrase from './Components/ButtonAddPhrase';

import PHRASES from '../Data';

class RandomPhrases extends Component {

  state = {
    number: PHRASES[Math.floor(0 + (Math.random() * (10 - 0)))],
  }

  addPhrase = (...authorPhraseImage) => {
    let author = authorPhraseImage[0];
    let phrase = authorPhraseImage[1];
    let theUrlImage = authorPhraseImage[2];
    PHRASES.push({author: author, phrase: phrase, theUrlImage: theUrlImage});
  }

  generatePhrase = () => {
    const min = 0;
    const max = PHRASES.length;
    console.log('mac',max)
    let rand = PHRASES[Math.floor(min + (Math.random() * (max - min)))]
    this.setState({
      number: rand
    })
  }

  render () {
    return (
      <div className='random-phrases'>
        <h1 className='random-phrases-title'>INS<span>PIRATE</span></h1>
        <Background
          changeImage={ this.state.number } />
        <Time />
        <Phrase
          changePhrase={ this.state.number } />
        <ButtonAddPhrase
          addPhrase={ this.addPhrase }
        />
        <Button
          generatePhrase={ this.generatePhrase } />
      </div>
    )
  }
}

export default RandomPhrases;