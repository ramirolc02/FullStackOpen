import { useState } from 'react'
import Person from "./components/Person"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

   const addPerson = (event) => {
    event.preventDefault()
    // can use function array.some()
    if(persons.filter(person => person.name === newName).length === 0){
   
      const personObject = {
        name: newName,
      }
      
      setPersons(persons.concat(personObject))
    }
    else{
        alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
  }
   
   const handlePersonChange = (event) => {
      setNewName(event.target.value)
   }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> 
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.name} person={person}/>)}
      </ul>
    </div>
  )
}

export default App