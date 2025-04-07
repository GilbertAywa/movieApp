function Video({ movie }) {
  return (
    <div>
      <div className="ratio ratio-16x9 mt-1">
        <iframe src="src/assets/videos/10677881-hd_1920_1080_30fps.mp4" title={movie.id} mute="true" allowFullScreen></iframe>
      </div>
      <div className="border border-info rounded p-2 mt-2 bg-dark">
        <div className="fw-bold text-light">Title: {movie.title}</div>
        <div className="fw-bold text-light">Release Date: {movie.release_date}</div>
        <div className="text-light fw-bold fs-5">OverView</div>
        <div className="text-light fw-bold">{movie.overview}</div>
      </div>
    </div>
  )
}

export default Video;