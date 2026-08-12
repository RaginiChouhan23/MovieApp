import "./MovieCard.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie, isFavoritePage = false, onRemove }) {

  const [isFavorite, setIsFavorite] = useState(false);

  // Check whether movie is already in Favorites
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const alreadyFavorite = favorites.some(
      (fav) => fav.id === movie.id
    );

    setIsFavorite(alreadyFavorite);
  }, [movie.id]);

  // Add movie to Favorites
  function addToFavorites(e) {
    e.preventDefault();
    e.stopPropagation();

    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const alreadyFavorite = favorites.some(
      (fav) => fav.id === movie.id
    );

    if (!alreadyFavorite) {
      favorites.push(movie);

      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );

      setIsFavorite(true);
    }
  }

  // Remove movie from Favorites
  function handleRemove(e) {
    e.preventDefault();
    e.stopPropagation();

    onRemove(movie.id);
  }

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="movie-card"
    >
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="movie-info">

        <h2>{movie.title}</h2>

        <p>⭐ {movie.vote_average}</p>

        {isFavoritePage ? (
          <button
            onClick={handleRemove}
            className="remove-favorite-btn"
          >
            ❌ Remove
          </button>
        ) : (
          <button
            onClick={addToFavorites}
            disabled={isFavorite}
          >
            {isFavorite
              ? "❤️ Added to Favorites"
              : "🤍 Add to Favorites"}
          </button>
        )}

      </div>
    </Link>
  );
}

export default MovieCard;