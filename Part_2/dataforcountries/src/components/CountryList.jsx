const CountryList = ({countriesToShow, filter}) => {

    if(countriesToShow === null) {
        return (
            <div>
                <p>No countries to show</p>
            </div>
        )
    }

    const countriesToShowFiltered = countriesToShow.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    if(countriesToShowFiltered.length > 10){
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }else{
        return (
            <div>
                {countriesToShowFiltered.map(country => <p key={country.flag}>{country.name.common}</p>)}
            </div>
        )
    }
}

export default CountryList