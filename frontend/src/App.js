import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import Register from "./components/Register";


function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/> 
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/productlist" element={<ProductList/>}/>
      <Route path="/productdetail/:id" element={<ProductDetail/>}/>   
   </Routes>
   </BrowserRouter>   
  );
}

export default App;
