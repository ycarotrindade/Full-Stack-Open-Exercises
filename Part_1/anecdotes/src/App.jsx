import { useState } from 'react'

const NextAnecdote = ({anecdotesLength, setAnecdote}) => {
  const randomAnecdote = () =>{
    setAnecdote(Math.floor(Math.random() * anecdotesLength))
  }
  return (
    <button onClick={randomAnecdote}>Next Anecdote</button>
  )
}

const VoteButton = ({anectdotesVotes, setanectdotesVotes, selected}) => {
  const uppVote = () => {
    let anectdotesVotesCopy = [...anectdotesVotes]
    anectdotesVotesCopy[selected]++
    setanectdotesVotes(anectdotesVotesCopy)
  }

  return (
    <button onClick={uppVote}>vote</button>
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
  const [anectdotesVotes, setanectdotesVotes] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      {anecdotes[selected]}<br/>
      <p>has {anectdotesVotes[selected]} votes</p><br/>

      <VoteButton anectdotesVotes={anectdotesVotes} setanectdotesVotes={setanectdotesVotes} selected={selected}/>
      <NextAnecdote anecdotesLength={anecdotes.length} setAnecdote={setSelected}/>
    </div>
  )
}

export default App