import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { isFavourite, addToFavs, removeFromFavs } = useMovieContext();
  const favourite = isFavourite(movie.id);

  const toggleIsFavourite = (e) => {
    e.preventDefault();
    if (favourite) {
      removeFromFavs(movie.id);
    } else {
      addToFavs(movie);
    }
  }

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2 p-1">
      <div className="card bg-dark text-secondary">
        <div className="cardImg">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
        </div>
        <div className="card-body">
          <h5 className="card-title s-5 text-truncate">{movie.title}</h5>
          <div className="card-title fs-6 mt-0">
            Year: {movie.release_date.split("-")[0]}

            <button
              onClick={toggleIsFavourite}
              className="ms-3 like-btn">
              {favourite ?
                <img src="/movieApp/icons/heart-solid-red.svg" style={{ width: "100%" }} alt="red-heart-icon"/>
                :
                <img src="/movieApp/icons/heart-solid.svg" style={{ width: "100%" }} alt="heart-icon" />
              }
            </button>

            <Link to={"/play_video?movie_id=" + movie.id} className="ms-3 play-btn">
              <img src="/movieApp/icons/play-solid.svg" alt="play-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;
/* 
  replace the whole image source with => `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
*/