import "./styles.css";
import bookmarkPNG from "./bookmark.png";
import { useState } from "react";

//var imageName = require('./bookmark.jpg')

var genreDictionary = {
  action: [
    {
      name: "Raazi",
      IMDB: "7.8/10",
      description:
        "A Kashmiri woman agrees to marry a Pakistani army officer in order to spy on Pakistan during the Indo-Pakistan War of 1971."
    },
    {
      name: "Ek Tha Tiger",
      IMDB: "5.5/10",
      description:
        "India's top spy Tiger and his love Zoya battle the dark world of intelligence and espionage that forbids its soldiers from loving the enemy. "
    }
  ],

  Superhero: [
    {
      name: "Spiderman",
      IMDB: "7.3/10",
      description:
        "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family."
    },
    {
      name: "IronMan",
      IMDB: "7.9/10",
      description:
        "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
    }
  ],

  Drama: [
    {
      name: "3 Idiots",
      IMDB: "8.4/10",
      description:
        "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them `idiots`."
    },
    {
      name: "Gangs of Wasseypur",
      IMDB: "8.2/10",
      description:
        "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations."
    }
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
                  <div style={{ fontSize: "smaller" }}>
                    {" "}
                    {movie.description}{" "}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
