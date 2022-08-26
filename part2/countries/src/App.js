import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Show =({countryname,handleSearch})=>
  (
    <button value={countryname.common} onClick={handleSearch}> show </button>
  )

const Country = ({countriesFilteredBySearch, handleSearch}) => {
  if( countriesFilteredBySearch.length === 1){
    const oneCountry = countriesFilteredBySearch[0]
    const values = Object.keys(oneCountry.languages).map(language => oneCountry.languages[language])
    return(
      <div>
        <h1> {oneCountry.name.common}</h1>
        <div> Capital: {oneCountry.capital}</div>
        <div> Area: {oneCountry.area}</div>
        <h3> Languages:  </h3>
        <ul>  {values.map(language => <li key={language}> {language}</li>)}</ul>
        <img 
        src={oneCountry.flags.png}
        alt={oneCountry.name}/>
      </div>
    )
  }
  else if(countriesFilteredBySearch.length > 10){
    return <div> Too many matches, specify another filter </div>
  }

 return (
 <div> 
   {countriesFilteredBySearch.map( country => <div key={country.name.official}>{country.name.common} <Show countryname={country.name} handleSearch={handleSearch}/></div>)}
 </div>
)
}

const App = () => {

  const[search, setSearch] = useState('')
  const[countries, setCountries] = useState([])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
 
  const countriesFilteredBySearch = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
   // console.log(countriesFilteredBySearch)

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  
  return(
  <div>
    find countries <input value={search} onChange={handleSearch} /> 
    <Country countriesFilteredBySearch={countriesFilteredBySearch} handleSearch={handleSearch} />
  </div>
  )
}
export default App;
