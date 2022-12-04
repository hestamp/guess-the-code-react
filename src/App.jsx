import { useState, useEffect, useRef } from 'react'

import wordList from '../src/Data/words.js'

import './App.css'

import Header from './components/Header/Header'
import Levels from './components/Levels/Levels'
import Score from './components/Score/Score'
import Task from './components/Task/Task'
import Wrapper from './components/Wrapper/Wrapper'

function App() {
  //variables
  const [difficultySet, setDifficultySet] = useState(1)
  const [chooseMode, setChooseMode] = useState(null)
  const [wordObject, setWordObject] = useState(null)
  const [maxGuesses, setMaxGuesses] = useState(5)
  const [corrects, setCorrects] = useState([])
  const [incorrects, setIncorrects] = useState([])
  const [tipLetterArray, setTipLetterArray] = useState(null)

  //alternative to querySelector
  const typeInput = useRef(null)
  const inputRef = useRef(null)

  //listen keypress
  useEffect(() => {
    randomWord()

    typeInput.current.addEventListener('input', initGame)
    inputRef.current.addEventListener('click', () => typeInput.current.focus())
    document.addEventListener('keydown', () => typeInput.current.focus())
    const inputs = document.querySelector('.inputs')
  }, [])

  //pressKeysAction
  function initGame(e) {
    let key = e.target.value.toLowerCase()
    console.log(key)
    let word = 'me'

    if (
      key.match(/^[A-Za-z]+$/) &&
      !incorrects.includes(` ${key}`) &&
      !corrects.includes(key) &&
      maxGuesses > 0
    ) {
      if (word.includes(key)) {
        for (let i = 0; i < word.length; i++) {
          if (word[i] === key) {
            setCorrects((oldArray) => [...oldArray, key])
            typeInput.querySelectorAll('input')[i].value = key
          }
        }
      } else {
        setMaxGuesses((old) => old - 1)
        setIncorrects((oldArray) => [...oldArray, key])
      }
    }
    typeInput.current.value = ''
    inputRef.current.value = ''
    // ifAllGuessed()
  }

  const randomWord = () => {
    let choose = null

    choose = wordList.filter((level) => level.hard === difficultySet)

    setChooseMode(choose)

    if (choose.length > 0) {
      //getting random from choosen array lvl
      let wordObj = choose[Math.floor(Math.random() * choose.length)]

      console.log(
        `Word - ${wordObj.word}. Difficult level is: ${difficultySet}. Array have ${choose.length} positions `
      )

      setWordObject(wordObj)
      setMaxGuesses(5)
      setIncorrects([])
      setCorrects([])
      let tip = wordObj.word.split('')
      setTipLetterArray(tip)

      // if (guessWord.length < 3) {
      //   tipBtn.classList.add('active')
      //   tipBtn.disabled = true
      // } else {
      //   tipBtn.classList.remove('active')
      //   tipBtn.disabled = false
      // }
    } else {
      //restart page after all guessed
      // hintPhrase.innerText = `Thats all. Realoading...`
      // wrappMe.classList.add('active')
      // setTimeout(function () {
      //   location.reload(true)
      // }, 3000)
    }
  }

  useEffect(() => {}, [])

  return (
    <div className="App">
      <Header />
      <Task wordObject={wordObject} />
      <Wrapper
        maxGuesses={maxGuesses}
        incorrects={incorrects}
        corrects={corrects}
        inputRef={inputRef}
        typeInput={typeInput}
        randomWord={randomWord}
        wordObject={wordObject}
      />
      <Levels />
      <Score />
    </div>
  )
}

export default App
