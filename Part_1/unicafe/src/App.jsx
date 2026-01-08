import { useState } from "react";

const Statistics = ({feedbacksObject}) => {
  return (
    <div>
      {Object.entries(feedbacksObject).map(([key, value]) => (
        <div key={key}>
          {key} {value}
        </div>
      ))}
    </div>
  )
}

const FeedBackButton = ({onClickHandler, text}) => {
  return (
    <>
      <button onClick={onClickHandler}>{text}</button>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedBackObj = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  const addFeedBackCounterHandler = (setState, state) => {
    return () => setState(state + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div style={{display:"flex", justifyContent:"space-around", width:"15vw"}}>
        <FeedBackButton onClickHandler={addFeedBackCounterHandler(setGood,good)} text={"good"}/>
        <FeedBackButton onClickHandler={addFeedBackCounterHandler(setNeutral,neutral)} text={"neutral"}/>
        <FeedBackButton onClickHandler={addFeedBackCounterHandler(setBad,bad)} text={"bad"}/>
      </div>
      <h1>Statistics</h1>
      <Statistics feedbacksObject={feedBackObj}/>
    </div>
  )
}

export default App