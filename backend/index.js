const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const app = express()
const Redis = require('redis')
const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter')
const axios = require('axios')
dotenv.config()




app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.use(userRouter)
app.use(productRouter)
const port = 5000;

app.listen(port,()=> {
    console.log(`Server berjalan di port : ${port}`)
})