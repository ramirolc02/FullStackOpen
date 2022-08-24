import { useState } from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"

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
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} handlePersonChange={handlePersonChange} 
      handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons personsCopy={personsCopy}/>
    </div>
  )
}

export default App