import React from 'react'
import { useState, useEffect } from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import personService from "./services/persons"
import Notification from './components/Notification'
import "./index.css"
import ErrorNotification from './components/ErrorNotification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter,setNewFilter] = useState('')
  const [successMessage, setsuccessMessage]=useState(null)
  const [errorMessage, seterrorMessage]=useState(null)



  useEffect(() => {
   personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

   const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }
    // can use function array.some()
    if(persons.filter(person => person.name === newName).length === 0){
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setsuccessMessage(`added ${returnedPerson.name}`)
        setTimeout(() => {
          setsuccessMessage(null)
        }, 5000)
      })
      .catch(error => {
        seterrorMessage(error.response.data.error)
        setTimeout(() => {
          seterrorMessage(null)
        }, 5000)
      })
    }
    else{
       const popup = `${newName} is already added to phonebook, replace the old number with a new one ?`
       const confirm = window.confirm(popup)
       if(confirm){
          handleUpdate(personObject)
        }
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

 const handleDelete = (personsCopy) => {
  const popup = `Delete ${personsCopy.name} ?`
  const confirm = window.confirm(popup)
  if(confirm){
  personService
      .deletePerson(personsCopy.id)
      .then(returnedPerson => {
        setPersons(returnedPerson)
        setsuccessMessage(`deleted ${returnedPerson.name}`)
        setTimeout(() => {
          setsuccessMessage(null)
        }, 5000)
      })

    }
 } 

 const handleUpdate = (personObject) => {
  const person = persons.find(p => p.name === personObject.name)
  const id = person.id
  personService
          .update(id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
            setsuccessMessage(`Updated ${newName}'s number`)
         setTimeout(() => {
           setsuccessMessage(null)
         }, 5000)
          })
          .catch(error => {
            seterrorMessage(error.response.data.error)
            setTimeout(() => {
              seterrorMessage(null)
            }, 5000)
          })
 }

 const personsCopy = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification successMessage={successMessage}/>
      <ErrorNotification errorMessage={errorMessage}/>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} handlePersonChange={handlePersonChange} 
      handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons personsCopy={personsCopy} handleDelete={handleDelete}/>
    </div>
  )
}

export default App