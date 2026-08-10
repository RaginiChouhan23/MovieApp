import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="navbar">

      <div className="navbar-left">

        <h2 className="logo">IMDb</h2>

        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/favorites" className="nav-link">
          Favorites
        </NavLink>

      </div>

      <div className="search-box">

        <input
          type="text"
          value={searchQuery}
          placeholder="Search Movies..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button onClick={() => onSearch(searchQuery)}>
          Search
        </button>

      </div>

    </header>
  );
}

export default Navbar;