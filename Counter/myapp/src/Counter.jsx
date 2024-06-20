import React, { useState } from 'react'

function Counter() {
    const [time,settime]=useState(0)
  return (
    <div>
        <div  style={{height:"200px",width:"40%",margin:"19% auto",backgroundColor:"#CAE6B2",borderRadius:"20px",paddingTop:"20px",border:"2px solid #D2649A"}}>
        <h1>COUNTER:{time}</h1>
        <button style={{padding:"10px 20px",borderRadius:"10px",backgroundColor:"#9BEC00"}} onClick={()=>settime((prev)=>prev+1)}>INCREMENT</button>&nbsp;&nbsp;
        <button style={{padding:"10px 20px",borderRadius:"10px",backgroundColor:"#FFC700"}} onClick={()=>settime(0)}>RESET</button>&nbsp;&nbsp;
        <button style={{padding:"10px 20px",borderRadius:"10px",backgroundColor:"#C80036",color:"white"}} disabled={time==0} onClick={()=>settime((prev)=>prev-1)}>DECREMENT</button>
        </div>
      
    </div>
  )
}

export default Counter
