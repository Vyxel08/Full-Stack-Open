import { useState } from 'react'

let score = 0

const Button = ( {handle, name} ) => {
  return (
    <button onClick={handle}>{name}</button>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={props.good} />
          <StatisticsLine text="neutral" value={props.neutral} />
          <StatisticsLine text="bad" value={props.bad} />
          <StatisticsLine text="all" value={props.total} />
          <StatisticsLine text="average" value={score / props.total} />
          <StatisticsLine text="positive" value={(props.good / props.total*100).toFixed(1) + "%"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [allClicks, setAll] = useState([])

  const fbGood = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1) 
    setTotal((good + 1) + neutral + bad)
    score += 1
  }

  const fbNeutral = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1) 
    setTotal(good + (neutral + 1) + bad)
  }

  const fbBad = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1) 
    setTotal(good + neutral + (bad + 1))
    score -= 1
  }

  return (
    <div>
      <h1>give geedback</h1>
      <Button handle={fbGood} name='good' />
      <Button handle={fbNeutral} name='neutral' />
      <Button handle={fbBad} name='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} allClicks={allClicks} />
    </div>
  )
}

export default App
