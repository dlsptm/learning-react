import logo from './logo.svg';
import React from "react";
import './App.css';
import moviesData from './data/movies';
import cardData from './data/card';

function App() {
  return (
    <main>
      <Header />
      <MovieList />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <div>
      <h1>Korean Movies</h1>
      <h2>List of best Korean movies</h2>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  return <footer>{new Date().toLocaleString()} - This is a test</footer>;
}

function MovieList() {
  const moviesLength = moviesData.length;
  return moviesLength > 0 ? (
    <>{ /* <React.fragment> */}
      <p>Salut, je suis dans un fragment</p>
      <ul>
        {moviesData.map((movie, index) => (
          <Movie key={index} movieObj={movie} />
        ))}
      </ul>
      { /* </React.fragment> */} </>
  ) : (
    <p>Pas de films</p>
  );
}

function Movie({ movieObj }) {
  const isBest = movieObj.rating >= 8;
  return (
    <li className={`${isBest ? "best" : ""}`}>
      <h3>{movieObj.title} ({movieObj.year})</h3>
      <p>Director: {movieObj.director}</p>
      <p>Rating: {movieObj.rating}</p>
      <p>Genre: {movieObj.genre.join(', ')}</p> {/* Transforme le tableau en chaîne */}
      <p>Korean Title: {movieObj.koreanTitle}</p>
      {isBest && <strong>BEST</strong>}
    </li>
  );
}

export default App;