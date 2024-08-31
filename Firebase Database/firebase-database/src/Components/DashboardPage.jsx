import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Services/Firebase'
import { Link } from 'react-router-dom'

const DashboardPage = () => {
    const [productsData,setProductsData]=useState([])
    const getDataFromFirebase = ()=>{
      getDocs(collection(db,"products")).then(res=>{
        let newArray = res.docs.map((el)=>({...el.data(),id:el.id}))
        setProductsData(newArray)
      }).catch(err=>console.log(err))
    }
    useEffect(()=>{
      getDataFromFirebase()
    },[])
  return (
    <div className="products-grid">
    {productsData.map((el) => (
      <div key={el.id} className="product-card">
        <h2>{el.title}</h2>
        <Link to={`/description/${el.id}`}>
          <img src={el.image} alt={el.title} className="product-image" />
        </Link>
        <h3>{el.category}</h3>
        <h3>{el.price}</h3>
      
      </div>
    ))}
  </div>
  )
}

export default DashboardPage
