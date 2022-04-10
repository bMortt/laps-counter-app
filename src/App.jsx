import React, { useState, useEffect } from 'react'
import './style.css'
import ShowLaps from './ShowLaps'
import ShowTime from './ShowTime'
import Button from './Button'


function App() {

  const [numberOfLaps, setNumberOfLaps] = useState(0)
  const [time, setTime] = useState(0)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [startButtonText, setStartButtonText] = useState('Iniciar')

  useEffect(() => {
    let timer = null
    if (isTimeRunning) {
      timer = setInterval(() => {
        setTime(old => old + 1)
      }, 1000)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [isTimeRunning])

  const toggleIsTimeRunning = () => {
    setIsTimeRunning(!isTimeRunning)
  }

  const increaseNumberOfLaps = () => {
    setNumberOfLaps(numberOfLaps + 1)
  }
  const decreaseNumberOfLaps = () => {
    if (numberOfLaps > 0) {
      setNumberOfLaps(numberOfLaps - 1)
    }
  }

  const reset = () => {
    setNumberOfLaps(0)
    setTime(0)
  }


  return (
    <div className="App">
      <ShowLaps laps={numberOfLaps} />
      <Button text='+' className="bigger-btn" onClick={increaseNumberOfLaps} />
      <Button text='-' className="bigger-btn"onClick={decreaseNumberOfLaps} />
      {
        numberOfLaps > 0 &&
        <ShowTime time={Math.round(time / numberOfLaps)} />
      }
      <Button text={isTimeRunning ? 'Pausar' : 'Iniciar'} onClick={toggleIsTimeRunning} />
      <Button text='Reiniciar' onClick={reset} />
    </div>
  )
}

export default App
