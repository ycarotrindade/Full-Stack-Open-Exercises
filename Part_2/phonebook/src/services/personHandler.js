import axios from "axios"

const listPersons = () => {
    const url = 'http://localhost:3001/persons'
    const request = axios.get(url)
    return request.then(response => response.data)
}

const addPerson = (personObject) => {
    const url = 'http://localhost:3001/persons'
    const request = axios.post(url, personObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const url = `http://localhost:3001/persons/${id}`
    const request = axios.delete(url)
    return request.then(response => response.data)
}

const editPerson = (editedPerson) => {
    const url = `http://localhost:3001/persons/${editedPerson.id}`
    const request = axios.put(url, editedPerson)
    return request.then(response => response.data)
}

export default {listPersons, addPerson, deletePerson, editPerson}