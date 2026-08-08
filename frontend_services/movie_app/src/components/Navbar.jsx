import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({onSearch}) {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <nav>
      <h2>IMDb</h2>
      <NavLink to="/">Home</NavLink>

      {" | "}

      <NavLink to="/favorites">Favorites</NavLink>
      
      <input type="text" value={searchQuery} placeholder="Search Movies..." onChange={(e)=>setSearchQuery(e.target.value)}/>
      <button onClick={()=> onSearch(searchQuery)}>Search</button>
      <p>You are typing : {searchQuery}</p>
    </nav>
  );
}

export default Navbar;