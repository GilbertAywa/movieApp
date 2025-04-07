import { createContext, useState, useContext, useEffect } from "react";

const Moviecontext = createContext();

export const useMovieContext = () => useContext(Moviecontext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem("favourites")) || []);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");
    if (storedFavs) setFavourites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavs = (movie) => {
    setFavourites(F => [...F, movie]);
  }

  const removeFromFavs = (movieId) => {
    setFavourites(favourites.filter(movie => movie.id !== movieId));
  }

  const isFavourite = (movieId) => {
    return favourites.some(movie => movie.id === movieId);
  }

  const value = {
    favourites,
    addToFavs,
    removeFromFavs,
    isFavourite,
    movies,
    setMovies
  }

  return <Moviecontext.Provider value={value}>
    {children}
  </Moviecontext.Provider>
}