import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/movieApi";
import MovieCard from "../components/MovieCard";

function Home({searchResults}) {

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

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      {searchResults.length > 0 && (
  <h2>Search Results</h2>
)}
{searchResults.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
))}
      <h1>Trending Movies</h1>

      
       {movies.map((movie) => (
  <MovieCard
    key={movie.id}
    movie={movie}
  />
))}

    </div>
  );
}

export default Home;