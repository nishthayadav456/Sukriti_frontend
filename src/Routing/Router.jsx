import React from 'react'
import { BrowserRouter,Routes,Route, NavLink } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import { Navbar } from '../Pages/Navbar'

export const Router = () => {
  return (
    <>
    
     <BrowserRouter>
   
<Routes>
  <Route path="/navbar" element={<Navbar/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
</Routes>
</BrowserRouter>
    </>
   
  
  )
}
