import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonHandler from './services/PersonHandler'
import Notification from './components/Notification'

const App = () => {

  const createNotification = (notificationObject) => {
    setnotificationMessageObject(notificationObject)
    setTimeout(() => setnotificationMessageObject({message:null, type:null}),2000)
  }

  const fetchPersons = () => {
    PersonHandler.listPersons()
    .then(response => setPersons(response))
    .catch(e => {
      createNotification({message:"Not possible to fetch persons. Try again later", type:"error"})
    })
  }

  const addPerson = (personObject) => {
    PersonHandler.addPerson(personObject)
    .then(response => setPersons(persons.concat(response)))
    .catch(e => {
      createNotification({message:`Not possible to add person. ${e}`, type:"error"})
    })
  }
  
  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
      setNewPhone(event.target.value)
  }

  const handlePersonsSubmit = (event) => {
      event.preventDefault()
      let newPerson = {name:newName, number:newPhone}
      if(persons.some(person => person.name === newPerson.name)){
          newPerson.id = persons.find(person => person.name === newPerson.name).id
          if(confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)){
            PersonHandler.editPerson(newPerson)
            .then(response => {
              setPersons(persons.map(person => person.id === response.id ? response : person))
              createNotification({message:`Modified ${response.name}`, type:"success"})
            })
            .catch(e => {
              createNotification({message:`Not possible to modify ${newPerson.name}; ${e}`, type:"error"})
            })
          }
      }else{
          addPerson(newPerson)
          setNewName('')
          setNewPhone('')
          createNotification({message:`Added ${newPerson.name}`,type:"success"})
      }
  }

  const handleDeletePerson = (id) => {
    const personToDelete = persons.filter(person => person.id === id)[0]
    if(confirm(`Delete ${personToDelete.name}?`)){
      PersonHandler.deletePerson(personToDelete.id)
      .then(setPersons(persons.filter(person => person.id !== personToDelete.id)))
      .catch(e => {
        createNotification({message:`Not possible to delete ${personToDelete.name}; ${e}`, type:"error"})
      })
    }
  }

  const [persons, setPersons] = useState([]) 
  useEffect(fetchPersons,[])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationMessageObject, setnotificationMessageObject] = useState({message:null, type:null})
  
  const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessageObject.message} type={notificationMessageObject.type}/>
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>add a new</h2>
      <PersonForm name={newName} phone={newPhone} handleNameChange={handleNameChange} handlePersonsSubmit={handlePersonsSubmit} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDeletePerson={handleDeletePerson}/>
    </div>
  )
}

export default App