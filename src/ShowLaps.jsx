import React from 'react'



const ShowLaps = (props) => {
    return (
      <p>
        <span id='laps'>{props.laps}</span><br />
        <span id='laps-text'>Laps</span>
      </p>
    )
  }

export default ShowLaps