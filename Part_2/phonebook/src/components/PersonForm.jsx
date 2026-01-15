const PersonForm = ({name, setName, phone, setPhone, persons, setPersons}) =>{

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    const handlePersonsSubmit = (event) => {
        event.preventDefault()
        const newPerson = {name:name, phone:phone, id:persons.length + 1}
        if(persons.some(person => person.name === newPerson.name)){
            alert(newPerson.name + " is already added to phonebook")
        }else{
            setPersons(persons.concat(newPerson))
        }
    }

    return (
        <form onSubmit={handlePersonsSubmit}>
            <div>
                <label htmlFor="name">name:</label><input id={"name"} value={name} onChange={handleNameChange} /><br/>
                <label htmlFor="phone">number:</label><input id={"phone"} value={phone} onChange={handlePhoneChange} type="text" />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm