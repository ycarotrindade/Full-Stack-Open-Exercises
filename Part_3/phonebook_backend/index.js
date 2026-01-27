const express = require("express")
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/info', (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people</p>
<p>${new Date(Date.now()).toString()}</p>
    `)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id || null
  const person = persons.filter(person => person.id === id)[0]
  if(person){
    response.json(person)
  }else{
    response.status(400).end()
  }
})


app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id || null
  const person = persons.filter(person => person.id === id)[0]
  if(!person){
    response.status(400).end()
  }else{
    persons = persons.filter(person => person.id !== id)
    response.json(person)
  }
})

app.post('/api/persons', (request, response) => {
  const {name, number} = request.body
  if(!name || !number){
    response.status(400).json({error:"name or number missing."})
    return
  }else if (persons.some(person => person.name === name)){
    response.status(400).json({error:"name must be unique"})
    return
  }
  const newPerson = {
    id:`${Math.floor(Math.random() * 1000000)}`, 
    name:name, 
    number:number
  }
  persons = persons.concat(newPerson)
  response.status(201).json(newPerson)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})