import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')


  const AddPerson = (event) => {
    event.preventDefault()
    const newPerson = {name:newName}
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
          name: <input value={newName} onChange={(event) => {setNewName(event.target.value)}} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <p key={i}>{person.name}</p>)}
    </div>
  )
}

export default App