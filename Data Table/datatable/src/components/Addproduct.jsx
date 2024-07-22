import axios from "axios";
import React, { useState } from "react";

const Addproduct = () => {
  const GetData = {
    id: "",
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  };
  const [newData, setNewData] = useState(GetData);
  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newData);
    axios
      .post("http://localhost:8080/product", newData)
      .then((res) => {
        console.log(res);
        alert("data added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>ADD PRODUCT</h1>
      <form>
        <input
          type="text"
          placeholder="Image"
          name="image"
          value={newData.image}
          onChange={(e) => handleChange(e)}
          style={{height:"30px",width:"300px"}}
        />{" "}
        <br /><br />
        <input
          type="text"
          placeholder="title"
          name="title"
          value={newData.title}
          onChange={(e) => handleChange(e)}
          style={{height:"30px",width:"300px"}}
        />{" "}
        <br /><br />
        <select
          onChange={(e) => handleChange(e)}
          style={{height:"30px",width:"150px"}}
          value={newData.category}
          name="category"
        >
          <option>select Your Category</option>
          <option value={"men's clothing"}>men's clothing</option>
          <option value={"jewelery"}>jewelery</option>
          <option value={"electronics"}>electronics</option>
          <option value={"women's clothing"}>women's clothing</option>
        </select>
        &nbsp;
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={newData.price}
          onChange={(e) => handleChange(e)}
          style={{height:"30px",width:"150px"}}
        />{" "}
        <br /><br />
        <input
          type="text"
          placeholder="description"
          name="description"
          value={newData.description}
          onChange={(e) => handleChange(e)}
          style={{height:"30px",width:"300px"}}
        />{" "}
        <br /><br />
        <input type="submit" onClick={(e) => handleSubmit(e)} style={{height:"30px",width:"120px",borderRadius:"10px",color:"white",backgroundColor:"black"}} />
      </form>
    </div>
  );
};

export default Addproduct;
