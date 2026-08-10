import "./MovieCard.css";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
     <Link to = {`/movie/${movie.id}`}>
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      </Link>

      <div className="movie-info">
        <h2>{movie.title}</h2>

        <p>⭐ {movie.vote_average}</p>

        <button>Add to Favorites</button>
      </div>

    </div>
  );
}

export default MovieCard;