import React from 'react'
import { useState, useEffect } from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter,setNewFilter] = useState('')

  useEffect(() => {
   personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

   const addPerson = (event) => {
    event.preventDefault()
    // can use function array.some()
    if(persons.filter(person => person.name === newName).length === 0){
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })

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
    setNewFilter(event.target.value)
 }

 const personsCopy = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

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