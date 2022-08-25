import React from 'react'

const Persons = ({personsCopy}) =>
    (
        <div>
        {personsCopy.map(person => <div key={person.name}> {person.name} {person.number} </div> )}
       </div>
    )

export default Persons