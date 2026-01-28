const PersonForm = ({name, phone, handleNameChange, handlePersonsSubmit, handlePhoneChange}) =>{

    return (
        <form onSubmit={handlePersonsSubmit}>
            <div>
                <label htmlFor="name">name:</label><input id={"name"} value={name} onChange={handleNameChange} /><br/>
                <label htmlFor="phone">number:</label><input id={"phone"} value={phone} onChange={handlePhoneChange} type="text" />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm