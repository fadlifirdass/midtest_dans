import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    // const [expire, setExpire] = useState('')
    const [users, setUsers] = useState([])
    const Navigate = useNavigate()

    useEffect(()=> {
        refreshToken()
        getUsers()
    },[])

    const refreshToken = async ()=> {
        try {
            const response = await axios.get('http://localhost:5000/token')
            setToken(response.data.accessToken)
            const decoded = jwt_decode(response.data.accessToken)
            setName(decoded.name)
            // setEmail(decoded.email)
            // setExpire(decoded.exp)
        } catch (error) {
            if(error.response){
                Navigate("/")
            }
        }
    }
    const axiosJWT = axios.create()

    // fungsi agar cookies tidak expired tanpa harus mereload page
    // axios.interceptors.request.use(async(config)=>{
    //     const currentDate = new Date()
    //     if(expire * 1000 < currentDate.getTime()){
    //         const response = await axios.get('http://localhost:5000/token')
    //         config.headers.Authorization = `Bearer ${response.data.accessToken}`
    //         setToken(response.data.accessToken)
    //         const decoded = jwt_decode(response.data.accessToken)
    //         setName(decoded.name)
    //         setExpire(decoded.exp)
    //     }
    //     return config
    // }, (error) => {
    //     return Promise.reject(error)
    // }
    // )

    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        setUsers(response.data)
    }

  return (
    <div>
        <Navbar/>
         <div className="container mt-5">
        <h1>Welcome Back: {name}</h1>
        <button onClick={getUsers} className="button-is-info">Cek Cookies and Users Info</button>
         <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                     <tr key={user.id}>
                     <td>{index + 1}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                 </tr>
                ))}
            </tbody>
         </table>
        </div>
    </div>
  )
}

export default Dashboard
