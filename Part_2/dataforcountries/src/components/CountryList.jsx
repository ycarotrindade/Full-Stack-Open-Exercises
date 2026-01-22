const Country = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital[0]}</p>
            <p>Area {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {Object.entries(country.languages).map(([key,value]) => {return <li key={key}>{value}</li>})}
            </ul>
            <img src={country.flags.svg} alt={country.flags.alt} width="300px" />
        </div>
    )
}

const CountryList = ({countriesToShow}) => {

    if(countriesToShow === null || countriesToShow.length === 0 ){
        return (
            <div>
                <p>No countries to show</p>
            </div>
        )
    }else if (countriesToShow.length === 1) {
        return (
            <>
            <Country country={countriesToShow[0]}/>
            </>
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
                {countriesToShow.map(country => <p key={country.flag}>{country.name.common}</p>)}
            </div>
        )
    }
}

export default CountryList