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

export default {listPersons, addPerson}