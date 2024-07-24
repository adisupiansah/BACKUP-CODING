/////////////////////////////////////=====> pembahasan route path <=====/////////////////////////////////////
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const db  = require('./connection')
const response = require('./response')

app.use(bodyParser.json())
app.get('/', (req, res) => {
    response(200, "ini data", "berhasil", res)
})
app.get('/mahasiswa', (req, res) => {
    res.send('list mahasiswa')
})
app.get('/mahasiswa/:nim', (req, res) => {
    const nim = req.params.nim
    res.send(`spesifik mahasiswa by id ${nim}`)
})

app.post('/mahasiswa', (req, res) => {
    res.send("ini posting")
})

app.put('/mahasiswa', (req, res) => {   
    res.send("ini put atau update data")
})

app.delete('/mahasiswa', (req, res) => {
    res.send("ini delete data mahasiswa"  )  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})