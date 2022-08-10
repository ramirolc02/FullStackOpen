import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const handleGoodClick = () => setGood(good + 1)

const handleNeutralClick = () => setNeutral(neutral + 1)

const handleBadClick = () => setBad(bad + 1)

const all = good + neutral + bad

  return (
    <div>
      <h1> give feedback </h1>
      <button onClick={handleGoodClick}> good </button>
      <button onClick={handleNeutralClick}> neutral </button>
      <button onClick={handleBadClick}> bad </button>
      <h1> statistics </h1>
      <div> good {good} </div>
      <div> neutral {neutral} </div>
      <div> bad {bad} </div>
      <div> all {all}</div>
      <div> average {(good*1 + bad*-1)/all} </div>
      <div> positive {(good/all)*100}% </div>
    </div>
  )
}

export default App