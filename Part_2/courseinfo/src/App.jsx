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

const App = () => {
   const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course}/>)}
    </div>
  )
}

export default App