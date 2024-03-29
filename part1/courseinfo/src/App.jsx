const Header = (props) => {
  console.log()
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.excercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} excercises={props.parts[0].excercises}/>
      <Part part={props.parts[1].name} excercises={props.parts[1].excercises}/>
      <Part part={props.parts[2].name} excercises={props.parts[2].excercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of excercises: {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack appication development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10
      },
      {
        name: 'Using props to pass data',
        excercises: 7
      },
      {
        name: 'State of a component',
        excercises: 14
      }
      ]
    }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
