import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster/>
  </React.StrictMode>,
)
