import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({setIsLoggedIn}) {
    const navigate = useNavigate();
   const [showPass, setshowPass] = useState(false)
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
function changeHandler(e){
    setFormData((prev)=>(
        {
            ...prev,
            [e.target.name]: e.target.value
        }
    ))
}

function submitHandler(e){
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In")
    navigate('/dashboard')
}


  return (
   <form 
   className='w-full mt-4'
   onSubmit={submitHandler}>
    <label>
        <p  className='font-semibold'>Email Id <sup className='text-lg text-red-600'>*</sup></p>
        <input 
         className='w-full py-3 px-4 rounded-md bg-gray-700 text-white opacity-100' 
        required
        autoComplete="on"
        type="email" 
        name='email'
        value={formData.email}
        placeholder='Enter your email'
        onChange={changeHandler}
        />
    </label>
     <label className='flex flex-col relative'>
        <p className='font-semibold'>Password<sup className='text-lg text-red-600'>*</sup></p>
        <input
        className='w-full py-3 px-4 rounded-md bg-gray-700 text-white opacity-100 relative' 
        required
        autoComplete="on"
        type={showPass ? "text":"password"}
        name='password'
        value={formData.password}
        placeholder='Enter your password'
        onChange={changeHandler}
        />

        <span 
        className='right-4 absolute top-10 text-2xl'
        onClick={()=>setshowPass((prev)=>!prev)} >
            { 
                showPass ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)
            }
        </span>

        <Link to='#'>
            <span className='text-left absolute right-0 text-cyan-300 text-sm'>Fogot password</span>
        </Link>
    </label>
    <button className='mt-12 w-full bg-yellow-400 py-2 text-center rounded-md text-black'>Sign In</button>
    
   </form>
  )
}

export default LoginForm
