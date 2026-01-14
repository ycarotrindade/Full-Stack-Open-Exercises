const Course = ({course}) => {
  const sumOfExercises = course.parts.reduce((acc, current) => acc + current.exercises, 0)
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

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => <Part key={part.id} part={part}/>)}
    </>
  )
}

export default Course