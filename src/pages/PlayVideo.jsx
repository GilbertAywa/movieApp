import Video from "../componets/Video";
import { useMovieContext } from "../context/MovieContext";

function PlayVideo() {
  const { movies } = useMovieContext()

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const movieId = Number(urlParams.get('movie_id'));

  const movie = movies.filter(movie => movie.id === movieId)[0];
  return (
    <div className="pt-5">
      {
        movie ?
          <Video movie={movie} />
          :
          <div className="alert alert-warning  d-flex align-items-center" role="alert" >
            <svg style={{ height: "30px" }} xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>
              Something Went Wrong
            </div>
          </div>

      }
    </div>
  )
}

export default PlayVideo;