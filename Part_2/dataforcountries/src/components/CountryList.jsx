import { useState } from "react"

const Country = ({country}) => {
    const [show, setShow] = useState(false)

    const handleOnClickShowButton = (event) => {
        setShow(prev => !prev)
    }

    if(show){
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>Capital {country.capital[0]}</p>
                <p>Area {country.area}</p>
                <h2>Languages</h2>
                <ul>
                    {Object.entries(country.languages).map(([key,value]) => {return <li key={key}>{value}</li>})}
                </ul>
                <img src={country.flags.svg} alt={country.flags.alt} width="300px" /><br/>
                <button onClick={handleOnClickShowButton}>Hide</button>
            </div>
        )
    } else {
        return (
            <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                <p>{country.name.common}</p>
                <button onClick={handleOnClickShowButton}>Show</button>
            </div>
        )
    }
}

const CountryList = ({countriesToShow}) => {

    if(countriesToShow === null || countriesToShow.length === 0 ){
        return (
            <div>
                <p>No countries to show</p>
            </div>
        )
    }else if(countriesToShow.length > 10){
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }else{
        return (
            <div>
                {countriesToShow.map(country => <Country key={country.flag} country={country}/>)}
            </div>
        )
    }
}

export default CountryList