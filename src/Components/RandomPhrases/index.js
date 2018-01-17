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
    console.log(PHRASES)
    const imagesPayRandom = Math.floor(1 + (Math.random() * 10));
    let author = authorPhraseImage[0],
        phrase = authorPhraseImage[1],
        ids = Math.random(),
        img = require(`../../Images/${imagesPayRandom}.jpg`);
    PHRASES.push({
      id: ids,
      author,
      phrase: `“${ phrase }”`,
      img,
    });
  }

  generatePhrase = () => {
    const min = 0;
    const max = PHRASES.length;
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