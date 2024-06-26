import { useEffect, useState } from "react";

const Post = () => {
    const[data,setdata]=useState([])
    const[loading,setloading]=useState(false)
    const getdata= async ()=>{
        try {
            setloading(true)
           const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setdata(data))
            setloading(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getdata();
      },[]);
  return loading ? (
    <h1 style={{ display: "block", margin: "10% auto", textAlign: "center",fontSize:"52PX" }}>
     FINDING...
    </h1>
  ) :(
    <div className="App">
        {
            data.map((el)=>(
                <div key={el.id} style={{width:"70%",border:"3px solid #3DC2EC",margin:"3% auto",padding:"5px 80px"}}>
                    <h1>{el.title}</h1>
                    <h3>{el.body}</h3>
                </div>
            ))
        }
      
    </div>
  )
}

export default Post
