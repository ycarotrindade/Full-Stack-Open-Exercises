const Course = ({course}) => {
  const sumOfExercises = course.parts.reduce((acc, current) => acc + current.exercises, 0)
  //course.parts.forEach(part => {sumOfExercises += part.exercises})
  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={sumOfExercises}/>
    </>
  )
}

const Total = ({total}) => {
  return (
    <p style={{fontWeight:"bold"}}>total of {total} exercises</p>
  )
}

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
      <Part part={props.parts[3]}/>
    </>
  )
}

const App = () => {
   const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App