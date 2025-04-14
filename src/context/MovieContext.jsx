import { createContext, useState, useContext, useEffect } from "react";

const Moviecontext = createContext();

export const useMovieContext = () => useContext(Moviecontext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(
    [
      { adult: false, 
        backdrop_path: "/lqHt4icP1GTaNBeVTxTrwTZdoAW.jpg", 
        original_language: "hi", 
        genre_ids: [28, 53, 9648, 80], "id": 1195430, 
        original_title: "देवा", 
        overview: "Dev Ambre, a ruthless cop, loses his memory in an accident just after he has finished solving a murder case and now has to reinvestigate it while keeping his memory loss a secret from everyone except DCP Farhan Khan.", 
        popularity: 341.0237, 
        poster_path: "/4wKpglgZYMYpISMdThgdqS1TSQc.jpg", 
        release_date: "2025-01-31", 
        title: "Deva", 
        video: false, 
        vote_average: 3.231, 
        vote_count: 13 
      }, 
      { adult: false, 
        backdrop_path: "/gsQJOfeW45KLiQeEIsom94QPQwb.jpg", 
        id: 1125899, 
        genre_ids: [28, 53], 
        original_language: "en", 
        original_title: "Cleaner", 
        overview: "When a group of radical activists take over an energy company's annual gala, seizing 300 hostages, an ex-soldier turned window cleaner suspended 50 storeys up on the outside of the building must save those trapped inside, including her younger brother.", 
        popularity: 332.8452, 
        poster_path: "/mwzDApMZAGeYCEVjhegKvCzDX0W.jpg", 
        release_date: "2025-02-19", "title": "Cleaner", 
        video: false, 
        vote_average: 6.512, 
        vote_count: 172 
      }
    ]
  );
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