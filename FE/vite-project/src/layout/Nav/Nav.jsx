import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"center",paddingBottom:"50px"}}>
   <Link to={"/"}>Home</Link>
   <Link to={"/admin"}>Admin</Link>
   <Link to={"/login"}>Login</Link>
   <Link to={"/register"}>Register</Link>
    </div>
  )
}

export default Nav