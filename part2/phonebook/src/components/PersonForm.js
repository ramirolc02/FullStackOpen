import React from 'react'

const PersonForm = ({addPerson,handlePersonChange,handleNumberChange,newName,newNumber}) => (
    <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> 
)

export default PersonForm