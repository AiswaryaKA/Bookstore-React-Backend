//import dotenv library
require('dotenv').config()//load environment
//import express library
const express = require('express')
//import cors
const cors = require('cors')
//import route
const route = require('./routes')
//import db connection file
require('./databaseconnection')

//create the server-express()
const bookstoreServer = express()

//server using cors
bookstoreServer.use(cors())
bookstoreServer.use(express.json())//it parses the json format-middleware
bookstoreServer.use(route)

//export the uploads folder from serverside
bookstoreServer.use('/upload',express.static('./uploads'))

bookstoreServer.use('/pdfUploads',express.static('./pdfUploads'))




//create port
PORT = 4000 || process.env.PORT

bookstoreServer.listen(PORT , ()=>{
    console.log(`server running successfully at port number ${PORT}`)
})