const Header = (props) => {
  return (
  <>
    <h1>{props.course}</h1>
  </>
  )
}
const Part = (props) => {
  return (
    <>
      <p>
        {props.content} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  let {contents, exercises} = props
  return (
    <>
      <Part content={contents[0]} exercises={exercises[0]}/>
      <Part content={contents[1]} exercises={exercises[1]}/>
      <Part content={contents[2]} exercises={exercises[2]}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.sumExercises}</p>
    </>
  )
}

const App = () => {
  const course = "Half Stack application developement"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14
  const contentObj = {
    exercises:[exercises1, exercises2, exercises3],
    contents:[part1, part2, part3]
  }
  return (
    <div>
      <Header course={course}/>
      <Content contents={contentObj.contents} exercises={contentObj.exercises}/>
      <Total sumExercises={contentObj.exercises.reduce((partSum, a) => partSum + a,0)}/>
    </div>
  )
}

export default App