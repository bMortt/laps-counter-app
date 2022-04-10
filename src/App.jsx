import React from 'react';


const ShowLaps = (props) => {
  return (
    <p>
      {props.laps}<br />
      Laps
    </p>
  )
}


function App() {
  return (
    <div className="App">
      <ShowLaps laps='10' />
    </div>
  );
}

export default App;
