const Header = (props) => {
  return (
  <>
    <h1>{props.course}</h1>
  </>
  )
}

const Content = (props) => {
  let {contents, exercises} = props
  return (
    <>
      <p>
        {contents[0]} {exercises[0]}
      </p>
      <p>
        {contents[1]} {exercises[1]}
      </p>
      <p>
        {contents[2]} {exercises[2]}
      </p>
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