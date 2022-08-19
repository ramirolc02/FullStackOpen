import react from 'react'

const Course = ({course}) => (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <div>
        total of {course.parts.reduce((sum,part) => sum + part.exercises,0)} exercises
      </div>
    </div>
  )

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

  export default Course