import axios from 'axios'
import React,{useState, useEffect} from 'react'
import Navbar from './Navbar'

const ProductDetail = () => {

 useEffect(()=>{
    getProductsById()
 },[]) 
    const [productById, setProductById] = useState([])

    const getProductsById = async (id) => {
        const response = await axios.get(`http://localhost:5000/products/${id}`)
        console.log(response.data)
    }
  return (
    <div>
        <Navbar/>
        <div>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {productById.map((product,index)=>(
                     <tr key={product.id}>
                     <td>{product.title}</td>
                 </tr>
                ))}
            </tbody>
         </table>
        </div>
    </div>
  )
}

export default ProductDetail

