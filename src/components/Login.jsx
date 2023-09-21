import React from 'react'
import loginpImg from '../assets/login.png'
import Template from './Template'
import { useOutletContext } from "react-router-dom";


function Login() {
  const [isLoggedIn, setIsLoggedIn]  = useOutletContext();
  return (
    <Template
    title='Welcome Back'
    desc1='Build skills for today, tomorrow, and beyond.'
    desc2='Education to future-proof your career.'
    image ={loginpImg}
    formType='login'
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
