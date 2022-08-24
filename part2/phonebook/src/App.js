import { useState } from 'react'
import Person from "./components/Person"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter,setNewFilter] = useState('')
  const [personsCopy, setNewPersonsCopy] = useState(persons);

   const addPerson = (event) => {
    event.preventDefault()
    // can use function array.some()
    if(persons.filter(person => person.name === newName).length === 0){
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewPersonsCopy(persons.concat(personObject));
    }
    else{
        alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }
   
   const handlePersonChange = (event) => {
      setNewName(event.target.value)
   }

   const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
 }

 const handleFilter = (event) => {
  // state change is asynchronous
    const input = event.target.value;
    setNewFilter(input)
    setNewPersonsCopy(persons.filter(person => person.name.toLowerCase().includes(input)))
 }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
      filter shown with <input value={filter} onChange={handleFilter}/>
      </p>
      <h2> Add a new contact</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> 
      <h2>Numbers</h2>
      <ul>
        {personsCopy.map( person=><Person key={person.id} person={person}/>)}
      </ul>
    </div>
  )
}

export default App