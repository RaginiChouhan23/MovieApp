import "./MovieDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movieApi";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Movie details load
  useEffect(() => {
    loadMovieDetails();
  }, [id]);

  async function loadMovieDetails() {
    try {
      const data = await getMovieDetails(id);
      setMovie(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Check favorite after movie is loaded
  useEffect(() => {
    if (!movie) return;

    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const alreadyFavorite = favorites.some(
      (fav) => fav.id === movie.id
    );

    setIsFavorite(alreadyFavorite);
  }, [movie]);

  // Add / Remove favorite
  function toggleFavorite() {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const alreadyFavorite = favorites.some(
      (fav) => fav.id === movie.id
    );

    if (alreadyFavorite) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.id !== movie.id
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      setIsFavorite(false);
    } else {
      favorites.push(movie);

      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );

      setIsFavorite(true);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="movie-details">

      <img
        className="details-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="details-info">

        <h1>{movie.title}</h1>

       <div className="movie-meta">

  <span>⭐ {movie.vote_average}</span>

  <span>📅 {movie.release_date}</span>

  <span>
    ⏱️ {Math.floor(movie.runtime / 60)}h{" "}
    {movie.runtime % 60}m
  </span>

</div>

<p className="genres">
  <strong>Genres:</strong>{" "}
  {movie.genres.map((genre) => genre.name).join(" • ")}
</p>

        <h2>Overview</h2>

        <p className="overview">
          {movie.overview}
        </p>



        <button
          className="favorite-btn"
          onClick={toggleFavorite}
        >
          {isFavorite
            ? "❤️ Remove from Favorites"
            : "🤍 Add to Favorites"}
        </button>

      </div>

    </div>
  );
};

export default MovieDetails;