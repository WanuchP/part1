import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr>
  <td>{props.text}</td>
  <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return <p>No feedback given</p>
  }
  return (
  <table>
  <thead></thead>
  <tbody>
  <StatisticLine text="good" value={props.good}/>
  <StatisticLine text="neutral" value={props.neutral}/>
  <StatisticLine text="bad" value={props.bad}/>
  <StatisticLine text="all" value={props.all}/>
  <StatisticLine text="average" value={Math.round(((props.good-props.bad)/props.all)*100)/100}/>
  <StatisticLine text="positive" value={(Math.round(props.good/props.all*100*100))/100 + " %"}/>
  </tbody>
  </table>
)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const incGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const incNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const incBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  } 

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incGood} text="good"/>
      <Button handleClick={incNeutral} text="neutral"/>
      <Button handleClick={incBad} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App