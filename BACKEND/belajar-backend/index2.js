const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db  = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  const sql = "SELECT * FROM mahasiswa"
  db.query(sql, (error, result) => {
    // hasil data dari MySql
    response(200, result, "berhasil", res)
  })
})

app.get('/find', (req, res) => {
  
// Kode ini akan mencari alamat dari mahasiswa berdasarkan nim yang diberikan dalam query parameter.
// Maksud dari codingan ini adalah untuk menampilkan data mahasiswa berdasarkan nim yang diberikan.
// Kode ini menggunakan template string untuk menggabungkan string dan variable.
// Variable req.query.nim akan diganti dengan nilai yang diberikan dalam query parameter.
// Jadi, jika pengguna mengakses endpoint /find dengan query parameter nim=12345678, maka akan mencari data alamat dari mahasiswa dengan nim 12345678.
const sql = `SELECT alamat FROM mahasiswa WHERE nim = ${req.query.nim}`
   
// Kode ini akan melakukan query ke database untuk mencari data alamat dari mahasiswa berdasarkan nim yang diberikan dalam query parameter.
// Setelah query selesai, maka akan mengirimkan respons dengan data alamat mahasiswa yang sesuai dengan nim yang diberikan.
// Jika query berhasil, maka status code akan 200 dan pesan akan "berhasil ambil data nim mahasiswa".
// Jika query gagal, maka status code akan 500 dan pesan akan "gagal ambil data nim mahasiswa".
db.query(sql, (error, result) => {
    response(200, result, "berhasil ambil data nim mahasiswa", res)
 })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})