import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonHandler from './services/PersonHandler'

const App = () => {

  const fetchPersons = () => {
    PersonHandler.listPersons()
    .then(response => setPersons(response))
    .catch(e => alert("Not possible to fetch persons. Try again later"))
  }

  const addPerson = (personObject) => {
    PersonHandler.addPerson(personObject)
    .then(response => setPersons(persons.concat(response)))
    .catch(e => alert(`Not possible to add person. ${e}`))
  }
  
  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
      setNewPhone(event.target.value)
  }

  const handlePersonsSubmit = (event) => {
      event.preventDefault()
      const newPerson = {name:newName, number:newPhone}
      if(persons.some(person => person.name === newPerson.name)){
          alert(newPerson.name + " is already added to phonebook")
      }else{
          addPerson(newPerson)
          setNewName('')
          setNewPhone('')
      }
  }

  const handleDeletePerson = (id) => {
    const personToDelete = persons.filter(person => person.id === id)[0]
    if(confirm(`Delete ${personToDelete.name}?`)){
      PersonHandler.deletePerson(personToDelete.id)
      .then(setPersons(persons.filter(person => person.id !== personToDelete.id)))
      .catch(e => `Not possible to delete ${personToDelete.name}; ${e}`)
    }
  }

  const [persons, setPersons] = useState([]) 
  useEffect(fetchPersons,[])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  
  const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>add a new</h2>
      <PersonForm name={newName} phone={newPhone} handleNameChange={handleNameChange} handlePersonsSubmit={handlePersonsSubmit} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDeletePerson={handleDeletePerson}/>
    </div>
  )
}

export default App