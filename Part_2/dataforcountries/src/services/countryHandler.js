import axios from "axios"

const fetchAllCountries = () => {
    const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'
    const request = axios.get(url)
    return request.then(response => response.data)
}

const fetchCountryCapitalWeather = (capitalName) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(capitalName)}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`
    const request = axios.get(url)
    return request.then(response => response.data)
}

export default {fetchAllCountries, fetchCountryCapitalWeather}