import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie, isFavoritePage = false, onRemove }) {

  function handleRemove(e) {
    e.preventDefault();
    e.stopPropagation();

    onRemove(movie.id);
  }

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">

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
          <button>
            Add to Favorites
          </button>
        )}

      </div>

    </Link>
  );
}

export default MovieCard;