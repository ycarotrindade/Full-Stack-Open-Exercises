import countryHandler from "./services/countryHandler"
import CountryList from "./components/CountryList"
import { useState, useEffect } from "react"

const App = () => {

  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState('')
  useEffect(() => {
    countryHandler.fetchAllCountries()
    .then(response => setCountries(response))
  }, [])

  const onChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <label htmlFor="filter">find countries </label><input id="filter" type="text" value={filter} onChange={onChangeFilter}/>
      <CountryList countriesToShow={countries} filter={filter}/>
    </div>
  )
}

export default App