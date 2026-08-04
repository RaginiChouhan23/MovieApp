import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import Moviedetails from '../pages/MovieDetails'
import Notfound from '../pages/NotFound'
const AppRoutes = () => {
  return (
    
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path="/favorites" element ={<Favorites/>}/>
      <Route path="/movie/:id" element = {<Moviedetails/>}/>
      <Route path='*' element = {<Notfound/>}/>
    </Routes>
    
  )
}

export default AppRoutes