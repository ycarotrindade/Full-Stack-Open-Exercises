const Notification = ({message, type}) => {
    if (message === null) {
        return null
    }
    
    return (
        <div style={{color: type === "success" ? "green" : "red", background:"lightgrey", fontSize:"20px", borderStyle:"solid", borderRadius:"5px", padding:"10px", marginBottom:"10px"}}>
            <p>{message}</p>
        </div>
    )
}

export default Notification