import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import MovieDetails from '../pages/MovieDetails'
import NotFound from '../pages/NotFound'
const AppRoutes = ({searchResults}) => {
  return (
  <Routes>
    <Route path= "/" element = {<Home searchResults= {searchResults}/>}/>
    <Route path= "/favorites" element = {<Favorites/>}/>
    <Route path= "/movie/:id" element = {<MovieDetails/>}/>
    <Route path='*' element = {<NotFound/>}/>
  </Routes>
  )
}

export default AppRoutes