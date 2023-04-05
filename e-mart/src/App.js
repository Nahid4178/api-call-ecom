import { Route, Routes } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Contact from './Components/Contact'
import Home from "./Components/Home"
import Navbar from './Components/Navbar'
import Product from "./Components/Product"
import Products from "./Components/Products"



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home/>} />
      </Routes>
     
    </>
  )
}

export default App