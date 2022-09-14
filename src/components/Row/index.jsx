import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getMovies } from "../../api";
import "./styles.css";

const imageHost = "https://image.tmdb.org/t/p/original/";
export const Row = ({ title, path, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  const handleOnClick = (movie) => {
    if (settrailerUrl("")) {
    } else {
      movieTrailer(movie.title||movie.name||movie.original_name||"").then((url)=>
      settrailerUrl(url)).catch((error)=>{
        console.log("Erro fetching movie trailer:",error)
      })
      
    }
  };

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      setMovies(data?.results);
    } catch (error) {
      console.log("fetchMovies:", error);
    }
  };
  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movie) => (
          <img
            className={`movie-card ${isLarge && "movie-card-large"}`}
            key={movie.id}
            src={`${imageHost}${
              isLarge ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name}
            onClick={() => handleOnClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <ReactPlayer className="ReactPlayer" playing={true} url={trailerUrl} />}
    </div>
  );
};
