import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductPage = () => {
  const [data,setdata]=useState([])

  const getproducts=()=>{
    axios.get("http://localhost:3000/products")
    .then((res)=>setdata(res.data))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getproducts()
  })
  return (
    <div>
      <h1>Product</h1>
      {
        data.map((el)=>(
          <div key={el.id}>
            <img src={el.image} height={200} width={200} alt="" />
            <h2>{el.title}</h2>
            <p>{el.price}</p>
            <p>{el.description}</p>

          </div>
        ))
      }
    </div>
  )
}

export default ProductPage
