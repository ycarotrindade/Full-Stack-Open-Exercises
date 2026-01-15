import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', phone:"040-123456"}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')


  const AddPerson = (event) => {
    event.preventDefault()
    const newPerson = {name:newName, phone:newPhone}
    if(persons.some(person => person.name === newPerson.name)){
      alert(newPerson.name + " is already added to phonebook")
    }else{
      setPersons(persons.concat(newPerson))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person, i) => <p key={i}>{person.name} {person.phone}</p>)}
    </div>
  )
}

export default App