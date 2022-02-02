console.clear()

const express=require('express')

const connect = require('./config/connect')

const router = require('./routes/Tasks')

const app = express()

app.use(express.json())

app.use("/todo",router)

connect()

const port = 3008

app.listen(port,err => err? console.log(err): console.log(`the app is running on port : ${port}`))