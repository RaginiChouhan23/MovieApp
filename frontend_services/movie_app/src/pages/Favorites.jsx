import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setFavorites(savedFavorites);
  }, []);

  function handleRemove(movieId) {
    const updatedFavorites = favorites.filter(
      (movie) => movie.id !== movieId
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    setFavorites(updatedFavorites);
  }

  return (
    <div className="favorites-page">
      <h1>My Favorites</h1>

      {favorites.length > 0 ? (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavoritePage={true}
              onRemove={handleRemove}
            />
          ))}
        </div>
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
}

export default Favorites;