import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

function Count() {
    let {count} = useSelector((state)=>state)
    const dispatch = useDispatch();
    
  return (
    <div style={{height:"50%",width:"50%",margin:"40px auto",backgroundColor:"aliceblue",display:"flex",flexDirection:"column",alignItems:"center",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <h1 style={{color:"tomato",fontWeight:"bolder",fontSize:"2rem"}}>Counter APP</h1>
        <h1 style={{color:"steelblue",fontWeight:"bolder",fontSize:"4rem"}}>{count}</h1>
        <div style={{display:"flex",gap:"20px",padding:"20px"}}>
        <button style={{background:"blur",height:"40px",width:"100px",backgroundColor:"yellowgreen",color:"ButtonHighlight",border:"none"}}  onClick={()=>{dispatch({type:'Inc'})}}  >Increment</button>
        <button style={{background:"blur",height:"40px",width:"100px",backgroundColor:"firebrick",color:"ButtonHighlight",border:"none"}} onClick={()=>{dispatch({type:'Dec'})}}  >Decrement</button>
        <button style={{background:"blur",height:"40px",width:"100px",backgroundColor:"red",color:"ButtonHighlight",border:"none"}} onClick={()=>{dispatch({type:'Res'})}}  >Reset</button>
        </div>
    </div>
  )
}

export default Count