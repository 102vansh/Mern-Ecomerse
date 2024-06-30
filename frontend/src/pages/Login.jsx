import React from 'react'
import './css/login.css'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useContext } from 'react'
import { Shopcontext } from '../context/Storecontext'
const Login = () => {
const{token,settoken} = useContext(Shopcontext)
  const [state,setstate] = useState('login')
  const[formdata,setformdat] = useState({
    name:'',
    email:'',
    password:''
  })
  const changehandler = (e)=>{
    setformdat({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }
  const login = async()=>{
    try{

let response = await axios.post('http://localhost:4001/api/v1/user/login',formdata)
console.log(response.data)
 if(response.data.status === 'success'){
    console.log(response.data.token)
    localStorage.setItem('token',response.data.token)
    localStorage.setItem('userid',response.data.user._id)
    console.log(response.data.user._id)
    settoken(response.data.token)
    window.location.replace('/')
    toast.success(response.data.message)
  }
  else{
    console.log('token is not there')
  }

    }catch(err){
      console.log(err)
      toast.error(err.response.data.message)
    }
  }
  const signup = async()=>{
    
    try{
    let response = await axios.post('http://localhost:4001/api/v1/user/register',formdata,{
      headers:{
        'Content-Type':'application/json'
      }
    })
    console.log(response.data)
    toast.success(response.data.message)
    }catch(err){
      console.log(err)
      toast.error(err.response.data.message)
    }
  }
  
  
  return (
    <div className='login'>
      <div className='log-container' >
      {state === 'login' ? <h1>Login</h1> :<h1>Sign UP</h1> }  
        <div className='log-fields'>
    {state === 'signup' ?  <input type="text" placeholder='username' name='name'  onChange={changehandler} value={formdata.name}/> : null}      
          <input type="email" placeholder='email' name='email' onChange={changehandler} value={formdata.email} />
          <input type="password" placeholder='password' name='password' onChange={changehandler} value={formdata.password} />
        
          
        </div>
        <button onClick={()=> state === 'login' ? login() : signup()}>Continue</button>
        {state === 'signup' ? <p className='text'>Already have an account?<span onClick={() => setstate('login')}>Sign in</span></p> : <p className='text'> Create an account? <span onClick={() => setstate('signup')}>Click here</span></p>}
        
        <div className='agree'>
          <input type="checkbox" />
          <p>I agree to the Terms & Conditions  & Privacy Policy</p>
        </div>
      </div> 
      <Toaster />
    </div>
  )
}

export default Login