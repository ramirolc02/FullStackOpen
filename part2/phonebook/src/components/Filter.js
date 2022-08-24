import React from 'react'

const Filter = ({filter, handleFilter}) => (
  <div> 
    <p>filter shown with <input value={filter} onChange={handleFilter}/> </p>
  </div>
)

export default Filter