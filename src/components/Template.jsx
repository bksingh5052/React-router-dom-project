import React from 'react'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";

function Template({title, desc1, desc2,formType, image, setIsLoggedIn}) {
  return (
    <div className='flex justify-evenly pt-10 bg-black text-white px-32 min-h-full'>
      <div className='flex flex-col max-w-[450px]'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='mt-6 flex flex-col font-semibold text-lg opacity-70'>
          <span>{desc1}</span>
          <span className='italic text-cyan-300'>{desc2}</span>
        </p>
        {
          formType ==="signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
        }
        <div className='flex gap-1 items-center justify-center mt-4'>
          <div className='h-[1px] w-full bg-neutral-700'></div>
          <p className='text-neutral-700'>OR</p>
          <div className='h-[1px] w-full bg-neutral-700'></div>
        </div>
        <button className='bg-black border border-neutral-700 px-5 py-2 font-semibold rounded-md mt-4 flex justify-center items-center gap-x-4 mb-6'>
          <FcGoogle className='text-2xl opacity-100'/>
          <p className=' opacity-70'>Sign up with Google</p>
        </button>
      </div>


      <div className='relative'>
        <img className=' absolute top-4 left-4 z-10' src={frameImage} alt="pattern" height={558} width={504} loading='lazy' />
        <img className='z-[99] relative' src={image} alt="students"  height={558} width={504} loading='lazy' />
      </div>
    </div>
  )
}

export default Template
