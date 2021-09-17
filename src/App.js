import "./styles.css";
import bookmarkPNG from "./bookmark.png";
import { useState } from "react";

//var imageName = require('./bookmark.jpg')

var genreDictionary = {
  action: [
    { name: "Raazi", IMDB: "7.8/10" },
    { name: "Ek Tha Tiger", IMDB: "5.5/10" }
  ],

  Superhero: [
    { name: "Spiderman", IMDB: "7.3/10" },
    { name: "IronMan", IMDB: "7.9/10" }
  ],

  Drama: [
    { name: "3 Idiots", IMDB: "8.4/10" },
    { name: "Gangs of Wasseypur", IMDB: "8.2/10" }
  ]
};

var genrelist = Object.keys(genreDictionary);

export default function App() {
  var [movieDetails, setMovieDetails] = useState("");
  function genreClickHandler(genre) {
    setMovieDetails(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>
        <img src={bookmarkPNG} style={{ width: "32px" }} alt="png" />
        My Watchlist
      </h1>
      <h2 style={{ color: "white" }}>
        Here is my movie watchlist. Take a look at it
      </h2>
      <p style={{ color: "white" }}>Select a genre</p>
      <div>
        {genrelist.map((genre, index) => (
          <button
            key={index}
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "1rem  2rem",
              border: "1px solid #63B4B8",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {genreDictionary[movieDetails] &&
            genreDictionary[movieDetails].map((movie) => {
              return (
                <li
                  key={movie}
                  style={{
                    listStyle: "none",
                    padding: "1rem",
                    border: "1px solid #D1D5DB",
                    width: "70%",
                    margin: "1rem 0rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "white"
                  }}
                >
                  <div style={{ fontSize: "larger" }}> {movie.name} </div>
                  <div style={{ fontSize: "smaller" }}> {movie.IMDB} </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
