import React from 'react'

const ShowTime = (props) => {
    const time = props.time
    const minutes = Math.round(time / 60)
    const seconds = time % 60
    const formatedMinutes = minutes < 10 ? '0' + minutes : minutes
    const formatedSeconds = seconds < 10 ? '0' + seconds : seconds
  
    return (
      <p>
        <span id="showtime">{`${formatedMinutes}:${formatedSeconds}`}</span><br />
        <span id="averagetime">Average time per Lap</span>
      </p>
    )
}

export default ShowTime