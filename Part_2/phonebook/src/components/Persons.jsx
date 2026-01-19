const Person = ({person}) => {
    return (
        <p key={person.id}>{person.name} {person.number}</p>
    )
}

const Persons = ({persons}) =>{
    return (
        <>
            {persons.map(person => <Person key={person.id} person={person}/>)}
        </>
    )
}

export default Persons