/////////////////////////////////////=====> pembahasan route path <=====/////////////////////////////////////
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const db  = require('./connection')
const response = require('./response')

app.use(bodyParser.json())
app.get('/', (req, res) => {
    response(200, "ini data", "ini pesan berhasil", res)
})
app.get('/mahasiswa', (req, res) => {
    const sql = "SELECT * FROM mahasiswa"
    db.query(sql, (err, fields) => {
        if (err) throw err
        response(200, fields, "ini pesan berhasil", res)
    })
})

app.get('/mahasiswa/:nim', (req, res) => {
    const nim = req.params.nim
    const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
    db.query(sql, (err, fields) => {
        if (err) throw err
        response(200, fields, "ini pesan berhasil", res)
    })
})

app.post('/mahasiswa', (req, res) => {
    const {nim, nama_lengkap, kelas, alamat} = req.body
    
    const sql = `INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (${nim}, '${nama_lengkap}', '${kelas}', '${alamat}')`
    
    db.query(sql, (err, fields) => {
        if (err) response(500, "invalid", "error", res)
        if(fields?.affectedRows) {
            const data = {
                isSucces: fields.affectedRows,
                id: fields.insertId,
            }
            response(200, data, "ini pesan berhasil", res)
        } 
    })
})

app.put('/mahasiswa', (req, res) => {   
   const {nim, nama_lengkap, kelas, alamat} = req.body
   const sql = `UPDATE mahasiswa SET nama_lengkap = '${nama_lengkap}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = ${nim}`

   db.query(sql, (err, fields) => {
       if (err) response(500, "invalid edit data", "error", res)
        if (fields?.affectedRows){
            const data = {
                isSucces: fields.affectedRows,
                message: fields.message,
            }
            response(200, data, "update berhasil", res)
        } else {
            response(500, "mohon maaf bray", "error", res)
        }
   })
})

app.delete('/mahasiswa', (req, res) => {
    const {nim} = req.body
    const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`
    
    db.query(sql, (err, fields) => {
        if (err) response(500, "invalid delete data", "error", res)
            if (fields?.affectedRows) {
                const data = {
                    isDeleted: fields.affectedRows,
                }
                response(200, data, "pesan berhasil dihapuskan", res)     
            } else {
                response(500, "mohon maaf bray data sudah tidak ada lagi", "error", res)
            }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})