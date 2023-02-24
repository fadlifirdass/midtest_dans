const axios = require('axios')


const getProducts = async (req,res) => {
    try {
        const response = await axios.get('https://dummyjson.com/products')
        res.json(response.data)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getProductById = async (req,res) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/${req.params.id}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}


module.exports = {getProducts, getProductById}