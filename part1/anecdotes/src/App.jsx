import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Highest = (props) => {
  return (
    <div>
      {props.text}
      has {props.num} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const points = new Uint8Array(8)

  const [copy, setCopy] = useState([...points])

  const [selected, setSelected] = useState(0)

  const handleRandomClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVoteClick = () => {
    const newCopy = [...copy]
    newCopy[selected] += 1
    setCopy(newCopy)
  }


  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <br></br>
      {anecdotes[selected]}
      <br></br>
      has {copy[selected]} votes
      <br></br>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleRandomClick} text="next anecdotes" />
      <br></br>
      <h1>Anecdotes with most votes</h1>
      <Highest text={anecdotes[copy.indexOf(Math.max(...copy))]}/>

    </div>
  )
}

export default App
