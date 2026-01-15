const Filter = ({filter, setFilter}) =>{

    const handleChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <>
            <label htmlFor="filter">filter shown with</label><input id={"filter"} type="text" value={filter} onChange={handleChange}/>
        </>
    )
}

export default Filter