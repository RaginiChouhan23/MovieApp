import "./Home.css";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/movieApi";
import MovieCard from "../components/MovieCard";

function Home({ searchResults, hasSearched }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    try {
      const data = await getTrendingMovies();
      setMovies(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <main className="home">
      {hasSearched ? (
        <>
          <h1>Search Results</h1>

          {searchResults.length > 0 ? (
            <div className="movie-grid">
              {searchResults.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>
          ) : (
            <p>No movies found</p>
          )}
        </>
      ) : (
        <>
          <h1>Trending Movies</h1>

          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default Home;