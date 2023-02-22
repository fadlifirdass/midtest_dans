const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const app = express()
const Redis = require('redis')
const userRouter = require('./router/userRouter')
const axios = require('axios')
dotenv.config()

const DEFAULT_EXPIRATION = 3600

const redisClient = Redis.createClient()

app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.get('/products', async (req,res)=> {
    // redisClient.get('products', (error, products)=>{
    //     if(error) console.error(error)
    //     if(products!=null){
    //         return res.json(JSON.parse(products))
    //     }
    // })
    const response = await axios.get('https://dummyjson.com/products')
    res.json(response.data)
    // redisClient.setex("products", DEFAULT_EXPIRATION, JSON.stringify(response))
})

app.get('/products/:id', async (req,res)=> {
    const response = await axios.get(`https://dummyjson.com/products/${req.params.id}`)
    res.json(response.data)
})

app.use(userRouter)


const port = 5000;

app.listen(port,()=> {
    console.log(`Server berjalan di port : ${port}`)
})