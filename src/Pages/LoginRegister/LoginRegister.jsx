import React, { useState,useContext } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';
import useFormFields from '../../utils/useFormFields';//for getting input values
import LoginContext from '../../utils/loginContext';
import "../LoginRegister/style.css"

export default function LoginRegister() {
  const{fields,handleFields}=useFormFields()
  const {setLogin}=useContext(LoginContext)
  const {setEmail}=useContext(LoginContext)


  function loginFn(e){
   e.preventDefault()
   fetch(`http://localhost:3001/users?email=${fields.email}&password=${fields.password}`)
   .then(res=>res.json())
   .then(data=>{
    if(data.length>0)
    {console.log(data);
    setLogin(true);
    setEmail(fields.email)
  }
    else{console.log("unsuccess")}
    }
    )
  }
  return (
  <> 
  <section className='login_section mt-5'>
  <div className='container-fluid '>
    <div className='row'>
      <div className='col-lg-6 col-12'>
      <div style={{width:"500px", margin:"auto"}}>
  <form>
  <div class="mb-3 mt-4" >
    <LockOpenIcon sx={{
        color:"white",
        display:"block",
        margin:"auto",
        backgroundColor:"var(--third-color)",
        borderRadius:"50%",
        width:"40px",
        height:"40px",
        padding:"5px"
    }}></LockOpenIcon>
    <h4  style={{textAlign:"center"}}>Login</h4>
    {/* email */}
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input 
    type="email" 
    className="form-control"
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    name='email'
    onChange={handleFields}
    />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  {/* password */}
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input
    type="password"
    className="form-control"
    id="exampleInputPassword1"
    name='password'
    onChange={handleFields}
    />
  </div>
  <div class="mb-3 ">
  <Link to="/register" style={{textDecoration:"none"}} >Don't have an account? Register</Link>
  </div>
  <button 
  type="submit" 
  class="btn" 
  style={{backgroundColor:"var(--first-color)", width:"100%"}}
  onClick={loginFn}
  >
  Login</button>
</form>
  </div>
      </div>
      <div className='col-lg-6 col-12'>
        <div className='row '>
          <div className='circle mt-5'></div>
        </div>
        <div className='row '>
          <div className='movedCircle'></div>
          <div>
            <p className='text mt-4'>Providing Everyday Need</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  </section>

 



  </>
  )
}
