import React, { useState } from 'react'
import './Wrapper.css'

const Wrapper = ({
  wordObject,
  newCodeButt,
  typeInput,
  inputRef,
  corrects,
  maxGuesses,
  incorrects,
  tipMe,
}) => {
  let word = wordObject?.word

  return (
    <div className="wrapper">
      <div className="content">
        <div className="details">
          <p className="hintPhrase">
            <span>{wordObject && wordObject.hint}</span>
          </p>
        </div>
        <input
          ref={typeInput}
          type="text"
          className="typingInput"
          maxLength="1"
        />
        <div ref={inputRef} className="inputs">
          {word &&
            word
              .split('')
              .map((inp, id) => (
                <input key={id} className="inputBlock" type="text" disabled />
              ))}
        </div>
        <div className="details">
          <div className="tryWrong">
            <p className="wrongLetters">
              Wrong:{' '}
              {incorrects.map((one, id) => (
                <span key={id}>{one.toUpperCase()}, </span>
              ))}
            </p>
            <p className="leftTries">
              Try: <span>{maxGuesses}</span>
            </p>
          </div>
        </div>
        <div className="buttons">
          <button id="1" className="timerButton">
            ⧗
          </button>
          <button onClick={newCodeButt} className="resetButton">
            New Code
          </button>
          <button
            disabled={
              (word && word.length < 3) || maxGuesses < 3 ? true : false
            }
            onClick={tipMe}
            className={`tipButton ${
              (word && word.length < 3) || maxGuesses < 3 ? 'active' : ''
            }`}
          >
            ?
          </button>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
