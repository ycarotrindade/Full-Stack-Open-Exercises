import axios from "axios"

const fetchAllCountries = () => {
    const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'
    const request = axios.get(url)
    return request.then(response => response.data)
}

export default {fetchAllCountries}