function MovieCard({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <h2>{movie.title}</h2>

      <p>⭐ {movie.vote_average}</p>

      <button>Add to Favorites</button>
    </div>
  );
}

export default MovieCard;