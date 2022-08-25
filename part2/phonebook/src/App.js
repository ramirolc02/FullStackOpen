import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter,setNewFilter] = useState('')
  const [personsCopy, setNewPersonsCopy] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setNewPersonsCopy(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

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