import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"

function SingleProductPage(){
    const {id} = useParams()
    const [singleData,setSingleData] = useState([])
    const [isload,setIsLoad] = useState(false)
    const singleProductData = (id)=>{
        setIsLoad(true)
      axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
      .then(res=>setSingleData(res.data.data),setIsLoad(false)).catch(err=>console.log(err))
    }
    const {brand,img,details,price,category}=singleData
    useEffect(()=>{
      singleProductData(id)
    },[id])
    return isload ? <Loader/> : (
        <div data-testid="products-container" style={{width:'300px',height:'500px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',borderRadius:"20px",padding:'10px 20px',margin:'5% auto '}}>   
            <div>
                <h3 data-testid="product-brand">{brand}</h3>
            </div>
            <div >
            <img data-testid="product-image" src={img} alt={brand} height={300} width={250}/>
            </div>
            <div data-testid="product-category">
                {category}
            </div>
           
            <div data-testid="product-details">
                {details}
            </div>
            <div data-testid="product-price">
                {price}
            </div>

            </div>
    )
}
export default SingleProductPage