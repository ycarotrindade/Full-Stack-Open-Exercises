import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')


  const AddPerson = (event) => {
    event.preventDefault()
    const newPerson = {name:newName, phone:newPhone, id:persons.length + 1}
    if(persons.some(person => person.name === newPerson.name)){
      alert(newPerson.name + " is already added to phonebook")
    }else{
      setPersons(persons.concat(newPerson))
    }
  }
  
  const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <label htmlFor="filter">filter shown with</label><input id={"filter"} type="text" onChange={event => setFilter(event.target.value)} />
      <h2>add a new</h2>
      <form onSubmit={AddPerson}>
        <div>
          <label htmlFor="name">name:</label><input id={"name"} value={newName} onChange={(event) => {setNewName(event.target.value)}} /><br/>
          <label htmlFor="phone">number:</label><input id={"phone"} value={newPhone} onChange={(event) => {setNewPhone(event.target.value)}} type="text" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {personsToShow.map(person => <p key={person.id}>{person.name} {person.phone}</p>)}
    </div>
  )
}

export default App