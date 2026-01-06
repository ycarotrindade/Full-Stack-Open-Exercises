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
        {props.part.name} {props.part.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
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
  const part1 = {
    name:"Fundamentals of React",
    exercises: 10
  } 
  const part2 = {
    name:"Using props to pass data",
    exercises:7
  }
  const part3 = {
    name:"State of a component",
    exercises:14
  }
  let parts = [part1, part2, part3]
  let sumOfExercises = 0
  parts.forEach(value =>{sumOfExercises += value.exercises})
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total sumExercises={sumOfExercises}/>
    </div>
  )
}

export default App