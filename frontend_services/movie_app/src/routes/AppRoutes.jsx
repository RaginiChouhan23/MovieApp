import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import MovieDetails from '../pages/MovieDetails'
import NotFound from '../pages/NotFound'
const AppRoutes = ({searchResults ,hasSearched}) => {
  return (
  <Routes>
<Route
  path="/"
  element={
    <Home
      searchResults={searchResults}
      hasSearched={hasSearched}
    />
  }
/>
    <Route path= "/favorites" element = {<Favorites/>}/>
    <Route path= "/movie/:id" element = {<MovieDetails/>}/>
    <Route path='*' element = {<NotFound/>}/>
  </Routes>
  )
}

export default AppRoutes