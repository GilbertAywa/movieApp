import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../componets/MovieCard";
function Favourite() {
  const { favourites } = useMovieContext();
  return (
    <div className="row pt-5 mt-2">
      <div className="text-center text-info fw-bold fs-3">MY FAVOURITES</div>
      {
        favourites.length < 1 ?
          <div className="card mx-auto text-center px-2 py-5 bg-dark mb-3 border-info" style={{ maxWidth: "350px" }}>
            <div className="card-body">
              <h3 className="card-title text-danger">No Favourite Movie Yet</h3>
              <p className="card-text text-info">Start adding favourite movies to your favourite and they will appear hear</p>
            </div>
          </div>
          :
          favourites.map(movie => <MovieCard movie={movie} key={movie.id} />)
      }
    </div>
  )
}

export default Favourite;