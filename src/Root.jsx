import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import { useState } from "react";


function Root() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='w-screen h-screen flex flex-col overflow-x-hidden'>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Outlet context={[isLoggedIn, setIsLoggedIn]}/>
      
    </div>
  )
}

export default Root
