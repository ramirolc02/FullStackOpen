
const Header = ({ course }) => <h3>{course}</h3>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
// map to create array of each part, doesn`t matter how many there are
// add key
  <div>
    {parts.map(part => <Part key={part.id} part={part}/>)}
  </div>      
  

const Course = ({course}) => (
  <div>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <div>
      total of {course.parts.reduce((sum,part) => sum + part.exercises,0)} exercises
    </div>
  </div>
)

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

  // map for each course information
  return (
    <div>
      <h1> Web development curriculum</h1>
       {courses.map( course => <Course course={course}/>)}
    </div>
  )
}

export default App
