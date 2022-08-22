import React ,{useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
  const homepage = useNavigate()
 
  const PostData=async(e)=>{
    
      e.preventDefault()

      let name=e.target.elements.name.value
      let email=e.target.elements.email.value
      let phone=e.target.elements.phone.value
      let password=e.target.elements.password.value
      const response=await fetch("http://localhost:8000/register",{
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify({
          name,email,phone,password
        })
      })
      console.log(response.status)
      if(response.status===200){
        alert("Successfully registered")
        homepage('/')
      }
      else{
        alert("Registration failed")
      }
  
  }
  const [show,setShow]=useState(false)
  
  return (
    <>
    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFbtcXuoFX9ug/company-logo_200_200/0/1637816745547?e=2147483647&v=beta&t=NEnDvCkpUvHH4xf6B5kk77tltAjMWyLtrlqbswrGScs"></img>
    <form onSubmit={PostData} className='app-register'>
      
        <div className='register-page-RP'>
            <p>SignUp</p> 
            <div className='user-data'>
                <div className='user-data-lf'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" id="phone"/>
                    <label htmlFor="password">Password</label>
                     <input type={show?'text':'password'} id='password' />
                      <span className="show"onClick={()=>{setShow(!show)}}> Show</span>
                </div><br />
            </div>
                <div className='user-verification'>
                    <a href="/"><button className="register" >Register</button></a><br />
                </div>
        </div>
        <div className="register-page-LP">
        <Link to="/"><button className="signin-button">Sign In</button></Link>
      </div>
    
    </form>

    </>

  )
}

export default SignUp