import { useState } from 'react'


const Header = () => {
  return(
  <h1> give feedback </h1>
  )
}
const Statistics = (props) => {
  
  if(props.all === 0){
    return(
      <div>
      <h2> statistics </h2>
      <div> No feedback given </div>
      </div>
    )
  }
  return (
    <div>
      <h2> statistics </h2>
      <div> good {props.good} </div> 
      <div> neutral {props.neutral} </div> 
      <div> bad {props.bad} </div> 
      <div> all {props.all} </div> 
      <div> average {props.average} </div> 
      <div> positive {props.positive} </div> 
    </div>
  )

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const handleGoodClick = () => setGood(good + 1)

const handleNeutralClick = () => setNeutral(neutral + 1)

const handleBadClick = () => setBad(bad + 1)

const all = good + neutral + bad
const average = (good*1 + bad*-1)/all
const positive = (good/all)*100 + " %"

  return (
    <div>
     <Header/>
      <button onClick={handleGoodClick}> good </button>
      <button onClick={handleNeutralClick}> neutral </button>
      <button onClick={handleBadClick}> bad </button>
      <Statistics good={good}
      neutral={neutral} 
      bad={bad}
      all={all}
      average={average}
      positive={positive}
      />
  
    </div>
  )
}

export default App