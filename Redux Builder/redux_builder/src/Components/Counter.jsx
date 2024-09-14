import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAdd, handleSub, reset } from '../Redux/CounterRedux/action'
import { darktheam, lighttheam } from '../Redux/ThemeRedux/action'

const Counter = () => {
  const dispatch=useDispatch()
  const { counter } = useSelector((store) => store.countreducer);
  const { theme } = useSelector((store) => store.themreducer);

  return (
    <div>
      <button onClick={()=>dispatch(darktheam())} disabled={theme==="dark"} style={{margin:"10px",padding:"7px",borderRadius:"5px"}}>DARK THEAM</button>
      <button onClick={()=>dispatch(lighttheam())} disabled={theme==="light"} style={{margin:"10px",padding:"7px",borderRadius:"5px"}}>LIGHT THEAM</button>
      <div style={{backgroundColor:theme==="dark"?"black":"white",color:theme==="dark"?"white":"black",height:"20vh",padding:"20%"}}>
      <h1>counter:{counter}</h1>
      <button onClick={()=>dispatch(handleSub())} style={{padding:"8px",fontWeight:"bold"}} disabled={counter===0}>-</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>dispatch(reset())} style={{padding:"8px"}}>reset</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>dispatch(handleAdd())} style={{padding:"8px"}}>+</button>
      </div>
    </div>
  )
}

export default Counter
