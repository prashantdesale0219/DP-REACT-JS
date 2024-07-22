import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setdata] = useState([]);
  const [cate, setcate] = useState(null);
  const [search, setsearch] = useState("");
  const [order, setorder] = useState(null);
  const [page,setpage]=useState(1)
  const getproductdata = () => {
    axios
      .get("http://localhost:8080/product", {
        params: {
          _limit:5,
          _page:page,
          category: cate,
          _sort: "price",
          _order: order,
          q: search
        },
      })
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getproductdata();
  }, [cate, order,search,page]);


  const handledelete=(id)=>{
    axios.delete(`http://localhost:8080/product/${id}`
      ).then((res)=>{
        getproductdata()
        alert("DATA DELETED")
        })
        .catch((err)=>console.log(err))
  }
  return (
    <div>
      <h1>PRODUCT PAGE</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <select name="" id="" onChange={(e) => setcate(e.target.value)}style={{height:"35px",backgroundColor:"black",color:"white",borderRadius:"10px"}}>
          <option value="">Select Category</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
        <input type="text" style={{height:"30px",width:"180px",borderRadius:"20px",paddingLeft:"10px"}} placeholder="SEARCH PRODUCTS" onChange={(e)=>setsearch(e.target.value)}/>
        <div>
          <button onClick={() => setorder("asc")}style={{height:"35px",backgroundColor:"black",color:"white",borderRadius:"10px"}}>LowToHigh</button>&nbsp;
          <button onClick={() => setorder("desc")}style={{height:"35px",backgroundColor:"black",color:"white",borderRadius:"10px"}}>HighToLow</button>
        </div>
      </div>
      <div
        style={{
          width: "80%",
          margin: "5% auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {data.map((el) => (
          <div key={el.id} style={{ border: "2px solid black" }}>
            <h3>{el.id}</h3>
            <Link to={`/description/${el.id}`}>
              <img src={el.image} height={200} width={200} alt="" />
            </Link>
            <h2>{el.title}</h2>
            <h3>{el.price}</h3>
            <h3>{el.description}</h3>
            <button><Link to={`/editproduct/${el.id}`}>EDIT</Link></button>
            <button onClick={()=>handledelete(el.id)}>DELETE</button>
          </div>

        ))}

       
      </div>
      <div>
          <button onClick={(el)=>setpage(page-1)} disabled={page==1} style={{padding:"10px 20px",borderRadius:"5PX"}}>PREV</button>&nbsp;&nbsp;
          &nbsp;          <span style={{backgroundColor:"black",color:"white",padding:"3px 7px",borderRadius:"10px"}}>{page}</span>&nbsp;&nbsp;&nbsp;
          <button onClick={(el)=>setpage(page+1)} disabled={page.data} style={{padding:"10px 20px",borderRadius:"5PX"}}>NEXT</button>
        </div><br /><br /><br />
    </div>
  );
};

export default Product;
