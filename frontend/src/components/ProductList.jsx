import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'


const ProductList = () => {

    const [products, setProduct] = useState([])

    useEffect(()=>{
      getProducts()
    },[])
    
    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products')
        setProduct(response.data.products)
    }

  return (
    <div>
        <Navbar/>
        <div>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Brand</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product,index)=>(
                     <tr key={product.id}>
                     <td>{index + 1}</td>
                     <td>{product.title}</td>
                     <td>
                        <Link to={`/productdetail/${product.id}`}> Detail </Link>
                     </td>
                 </tr>
                ))}
            </tbody>
         </table>
        </div>
    </div>
  )
}

export default ProductList
