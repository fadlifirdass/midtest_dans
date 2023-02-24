import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const ProductDetail = () => {

 useEffect(()=>{
    getProductsById()
 },[]) 
    const {id} = useParams()
    const [productById, setProductById] = useState([])

    const getProductsById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`)
        setProductById(response.data)
    }
  return (
    <div>
        <Navbar/>
        <div>
            <img src={productById.thumbnail} alt="" />
            <p>id : {productById.id}</p>
            <p>title : {productById.title}</p>
            <p>desc : {productById.description}</p>
            <p>price : {productById.price}</p>
            <p>discount : {productById.discountPercentage}</p>
            <p>rating : {productById.rating}</p>
            <p>stocks : {productById.stocks}</p>
        </div>
    </div>
  )
}

export default ProductDetail

