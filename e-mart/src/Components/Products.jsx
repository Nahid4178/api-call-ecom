import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ImageGrid from "./Loder1";






const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loding, setLoding] = useState(false);
  let componentMounted = true;


  useEffect(() => {
    const getProducts = async () => {
      setLoding(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoding(false);
       
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
        <>
         <ImageGrid/>
        </>
    )

    
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat)
    setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-4">
          <div className="btn btn-outline-dark me-2" onClick={() =>{setFilter(data)}}>ALL</div>
          <button className="btn btn-outline-dark me-2" onClick={() => {filterProduct("men's clothing")}}>MAN</button>
          <button className="btn btn-outline-dark me-2" onClick={() => {filterProduct("women's clothing")}}>WOMEN</button>
          <button className="btn btn-outline-dark me-2" onClick={() => {filterProduct("jewelery")}}>JEWELERY</button>
          <button className="btn btn-outline-dark me-2" onClick={() => {filterProduct("electronics")}}>ELECTONICS</button>
        </div>
        {filter.map((Product) => {
            return (
              <>
                <div className="col-md-3 mb-4">
                  <div className="card h-100 p-4 text-center" key={Product.id}>
                    <img src={Product.image} className="card-img-top" alt={Product.title} height= '250px'/>
                    <div className="card-body">
                      <h5 className="card-title mb-0 ">{Product.title.substring(0,12)}...</h5>
                      <p className="card-text lead fw-bold">
                       ${Product.price}
                      </p>
                      <NavLink to={`/product/${Product.id}`} className="btn btn-outline-dark">
                        Bye Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loding ? <Loading/> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
