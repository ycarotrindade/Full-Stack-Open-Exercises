const Person = ({person, handleDeletePerson}) => {
    return (
    <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
        <p key={person.id}>{person.name} {person.number}</p>
        <button type="button" onClick={() => handleDeletePerson(person.id)}>delete</button>
    </div>
    )
}

const Persons = ({persons, handleDeletePerson}) =>{
    return (
        <>
            {persons.map(person => <Person key={person.id} person={person} handleDeletePerson={handleDeletePerson}/>)}
        </>
    )
}

export default Persons