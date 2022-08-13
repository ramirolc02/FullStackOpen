
import { useState } from 'react'


const Header = () => (
  <h1> give feedback </h1>
)
  
const Button = ({handleClick, text}) => {

  return(
  <button onClick={handleClick}>
    {text}
  </button>
  )
}

const StatisiticLine = ({text,value}) => (

      <tr>
        <td> {text} </td>
        <td> {value} </td>
      </tr>

)

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
      <StatisiticLine text='good' value={props.good} />
      <StatisiticLine text='neutral' value={props.neutral} />
      <StatisiticLine text='bad' value={props.bad} />
      <StatisiticLine text='all' value={props.all} />
      <StatisiticLine text='average' value={props.average} />
      <StatisiticLine text='positive' value={props.positive} />
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
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad'  />
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
