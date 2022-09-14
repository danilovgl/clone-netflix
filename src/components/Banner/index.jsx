import React, { useEffect, useState } from "react";
import categories, { getMovies } from "../../api";
import "./styles.css";

export const Banner = () => {
  const [movie, setMovie] = useState({});
  const fetchRandomMovie = async () => {
    try {
      const netflixOrinalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOrinalsCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log("Banner fetchRandomMoovie error:", error);
    }
  };
  useEffect(() => {
    fetchRandomMovie();
  }, []);

  function Truncate(str,n){
    return str?.length > n ? str.substring(0, n - 1) + "..." : str
  }

  return (
    <header
      className="banner-container"
      style={{
        backgroudSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    >
      <div className="banner-content">
        <h2 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h2>
        <div className="banner-button-container">
          <button className="banner-button">Assistir</button>
          <button className="banner-button">Minha Lista +</button>
        </div>
        <div className="banner-description"> <h1> {Truncate(movie?.overview,150)} </h1> </div>
      </div>
    </header>
  );
};
