import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const MostVote = (props) => {
  if (props.voteArray[props.mostVote] === 0) {
    return <p>No vote given</p>
  }
  return (
    <>
    <p>{props.anecdotes[props.mostVote]}</p>
    <p>has {props.voteArray[props.mostVote]} votes</p>
    </>
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
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(8).fill(0))
  const [mostVote, setMostVote] = useState(0)

  function randAnecdote() {
    setSelected(Math.floor(Math.random() * 8))
  }
  const addVote = () => {
    const temp = [...voted]
    temp[selected]+=1
    if (temp[selected] >= temp[mostVote]) {
      setMostVote(selected)
    }
    setVoted(temp)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {voted[selected]} votes</p>
      <Button handleClick={addVote} text="vote"/>
      <Button handleClick={randAnecdote} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <MostVote voteArray={voted} mostVote={mostVote} anecdotes={anecdotes}/>
    </div>
  )
}

export default App