import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { addCart } from "../Redux/Action"
import EventsLoader from './Loder'




const Product = () => {
    const {id} = useParams()
const [product, setProduct] = useState([])
const [loading, setLoading] = useState(false)

const dispatch = useDispatch();
const addProduct = (product) => {
    dispatch(addCart(product))
}


useEffect(() => {
    const getProduct = async() => {
        setLoading(true)
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await res.json())
        setLoading(false)
    }
  

  getProduct()
}, [])

const Loading = () => {
    return (
        <>
        <EventsLoader />
        </>
    )
}

const ShowProduct = () => {
    return(
        <>
        <div className="col-md-6">
            <img src={product.image} alt={product.image} height="400px" width= "400px" />
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
                {product.category}
            </h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
                Rating {product.rating && product.rating.rate}
                <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">
                $ {product.price}
            </h3>
            <p className="lead">
                {product.description}
            </p>
            <button className="btn btn-outline-dark px-4 py-2" onClick={() => {addProduct(product)}}>Add To Cart</button>
            <NavLink to='/cart' className="btn btn-dark ms-2 py-2 px-3">Go To Cart</NavLink>
        </div>
        </>
    )
}

  return (
    <div>
        <div className="container py-5">
            <div className="row py-5">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}

export default Product