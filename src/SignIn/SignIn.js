import React,{useState} from 'react'
import {Link, useNavigate } from "react-router-dom"
import axios from "axios"
import './SignIn.css'
const SignIn = () => {
  const pastorders = useNavigate()
  const [email, setMail]=useState("")
  const [password,setPassword]=useState("")
  // const [login, setLogin]=useState(false)
  const loginUser = async (e) =>{
    e.preventDefault();
    axios.post("http://localhost:8000/login",{
      email:email,
      password:password
    })
    .then((response)=>{
      let newtoken = response.data.genToken 
      let Username = response.data.userDetails.name 
      localStorage.setItem(Username,newtoken)
      alert("Successfully logged in")
      
      pastorders('/orders')
      }).catch((err)=>{
        console.log(err)
        alert("logged in Failed")
      })
}
const [show,setShow]=useState(false)

  return (
    <>
    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFbtcXuoFX9ug/company-logo_200_200/0/1637816745547?e=2147483647&v=beta&t=NEnDvCkpUvHH4xf6B5kk77tltAjMWyLtrlqbswrGScs"></img>
    
    <form method='POST'  onSubmit={loginUser}>
      <center>
    <div className='sign-in'>
    <div className='sign-in-email'>
        <label>Email</label>
      <input type="email" value={email}
            onChange={(e)=>setMail(e.target.value)}></input>
    </div>
    <div className='sign-in-password'>
        <label>Password</label>
        <input type={show?'text':'password'} id='password' value={password}
          onChange={(e)=>setPassword(e.target.value)} 
          />
     <span className="eye-icon"onClick={()=>{setShow(!show)}}> Show</span>
    </div>
    
    </div>
    <button type="submit" className="signin" onClick={loginUser}>Sign in</button>
    <Link to="/signup"><button className="signup">SignUp</button></Link>
    </center>

    </form>
    
    </>
  )
}

export default SignIn
