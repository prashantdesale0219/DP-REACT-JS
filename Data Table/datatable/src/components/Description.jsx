import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
    const {id}=useParams()
    const[data,setdata]=useState({})
    console.log(data)

    const getdesdata=()=>{
        axios.get(`http://localhost:8080/product/${id}`)
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getdesdata()
    },[])
  return (
    <div>
        <h1 style={{backgroundColor:"black",color:"white"}}>DESCRIPTION PAGE</h1><hr />
        <div style={{width:"500px",margin:"auto"}}>
            <h2>{data.id}</h2>
            <img src={data.image} height={200} width={200} alt="" />
            <h2>{data.title} </h2>
            <h3>{data.price}</h3>
            <h3>{data.description}</h3>
        </div>
      
    </div>
  )
}

export default Description
