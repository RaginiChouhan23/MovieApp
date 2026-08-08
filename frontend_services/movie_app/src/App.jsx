import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import { searchMovies } from './services/movieApi'
function App() {
  const[searchResults, setSearchResults] = useState([])
   async function handleSearch(query){
    const data = await searchMovies(query);
    setSearchResults(data);
    
  }
  return (
  <div>
   <Navbar onSearch= {handleSearch}/>
   <AppRoutes searchResults = {searchResults}/>
  </div>
  )
}

export default App
