
const Header = ({ course }) => <h1>{course}</h1>

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
      }
    ]
  }

  return <Course course={course} />
}

export default App
