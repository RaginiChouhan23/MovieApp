import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import { searchMovies } from './services/movieApi'
function App() {
  const[searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
   async function handleSearch(query){
    const data = await searchMovies(query);
    setSearchResults(data);
    setHasSearched(true);
    
  }
  return (
  <div>
   <Navbar onSearch= {handleSearch}/>
   <AppRoutes searchResults = {searchResults}
    hasSearched = {hasSearched}
   />
  </div>
  )
}

export default App
