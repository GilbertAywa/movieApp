import { useEffect, useState } from "react";
import MovieCard from "../componets/MovieCard";
import { getPopularMovie, searchMovie } from "../backend/api";
import { useMovieContext } from "../context/MovieContext";

function Home() {

  const {movies, setMovies} = useMovieContext()
  const [searchQuery, setSearchQuery] = useState("")
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovie();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    }

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    setError(null);
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovie(searchQuery);
      setMovies(searchResults);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }

    setSearchQuery("")
  }

  return (
    <>
      <form onSubmit={handleSearch} className="search-engine mt-5 pt-1">
        <input
          type="text"
          className="bg-dark text-secondary fw-bold ps-3"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value) }}
        />
        <button type="submit" className="bg-info">Search</button>
      </form>

      {
        error

        &&

        <div className="alert alert-warning  d-flex align-items-center" role="alert" >
          <svg style={{ height: "30px" }} xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div>
            {error}
          </div>
        </div>
      }

      <div className="row pt-0">
        {
          loading ?
            <div className="text-center text-dark fs-5" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              &nbsp;&nbsp;Loading...
            </div>
            :
            movies.map((movie) =>
              movie.title.toLowerCase().includes(searchQuery) && (<MovieCard movie={movie} key={movie.id} />)
            )
        }
      </div>

    </>
  )
}

export default Home;
