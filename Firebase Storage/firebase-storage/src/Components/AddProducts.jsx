import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../Services/Firebase'


const AddProducts = () => {
    const [formData,setFormData]= useState({
        title:'',
        price:0,
        description:'',
        category:'',
        image:''
    })
    const {title,price,description,category,image}=formData
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        addDoc(collection(db,"products"),formData).then((res)=>alert("Added data")).catch(err=>console.log(err))
    }
  return (
    <div>
       <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder='Enter Title' name='title' value={title} onChange={(e)=>handleChange(e)}/> <br />
        <input type="number" placeholder='Enter price' name='price' value={price} onChange={(e)=>handleChange(e)}/> <br />
        <input type="text" placeholder='Enter category' name='category' value={category} onChange={(e)=>handleChange(e)}/> <br />
        <input type="text" placeholder='Enter Image Url' name='image' value={image} onChange={(e)=>handleChange(e)}/> <br />
        <input type="text" placeholder='Enter description' name='description' value={description} onChange={(e)=>handleChange(e)}/> <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default AddProducts
