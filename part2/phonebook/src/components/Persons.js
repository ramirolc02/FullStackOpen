import React from 'react'

const Persons = ({personsCopy, handleDelete}) =>
    (
        <div>
        {personsCopy.map(person => <div key={person.name}> {person.name} {person.number} 
        <button onClick={() => handleDelete(person)}> delete </button> </div> )}
       </div>
    )

export default Persons