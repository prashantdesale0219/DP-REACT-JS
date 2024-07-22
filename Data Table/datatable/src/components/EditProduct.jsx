import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditProduct = () => {

  const {id}=useParams()
  const initialData= {
    id:'',
    title:'',
    price:0,
    description:'',
    category:'',
    image:''
  }
  const [formData,setFormData] = useState(initialData)

  const getSingleData=()=>{
    axios.get(`http://localhost:8080/product/${id}`).then((res)=>{
      setFormData(res.data)
      }).catch(err=>console.log(err))
  }
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const {title,image,category,description,price}=formData
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:8080/product').then((res)=>setFormData(res.data)).catch(err=>console.log(err))
  }

  useEffect(()=>{
    getSingleData()
  },[])
  return (
    <div>
       <form onSubmit={(e)=>handleSubmit(e)}>
          <input type="text" placeholder="Image" name='image' value={image} onChange={(e)=>handleChange(e)}/> <br />
          <input type="text" placeholder="title" name='title' value={title} onChange={(e)=>handleChange(e)}/> <br />
          <select  onChange={(e)=>handleChange(e)} value={category} name='category'>
            <option>select Your Category</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
            <option value={"women's clothing"}>women's clothing</option>
          </select>
          <input type="text" placeholder="Price" name='price' value={price} onChange={(e)=>handleChange(e)}/> <br />
          <input type="text" placeholder="description" name='description' value={description} onChange={(e)=>handleChange(e)}/> <br />
          <input type="submit"/>
        </form>
    </div>
  )
}

export default EditProduct