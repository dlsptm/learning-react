import moviesData from '../data/movies';
import React, { useState } from "react";

export default function Header() {
  const [step, setStep] = useState(1); // Utilisation de useState pour gérer step
  
  const handlerPrevious = () => {
    if (step > 1) {
      setStep(step - 1); // Réduire step
    }
  };
  
  const handlerNext = () => {
    if (step < moviesData.length) {
      setStep(step + 1); // Augmenter step
    }
  };
  
  return (
    <div className="steps">
      <div className="buttons">
        <button style={{
          backgroundColor: '#7950f2',
          color: '#fff',
        }} onClick={handlerPrevious}>
          Previous
        </button>
        <button style={{
          backgroundColor: '#7950f2',
          color: '#fff',
        }} onClick={handlerNext}>
          Next
        </button>
      </div>
      
      <div className="numbers">
        {moviesData.map((movie, index) => (
          <div key={index} className={`${index === step - 1 ? 'active' : ''}`}>
            {index + 1}
          </div>
        ))}
      </div>
      
      <p className="message">Movie: {moviesData[step - 1].title}</p> {/* Accéder à la propriété title */}
      
      <div className="card-container">
        <Card movieObj={moviesData[step - 1]} />
      </div>
    </div>
  );
}

function Card({ movieObj }) { // Corriger ici pour utiliser movieObj
  const isBest = movieObj.rating >= 8; // Assurez-vous que movieObj est défini
  return (
    <div className={`${isBest ? "best card" : "card"}`}>
      <img src={movieObj.picture} alt={movieObj.title} className="img" /> {/* Fermer correctement le tag */}
      <div>
        <h3>{movieObj.title} ({movieObj.year})</h3>
        <p>Director: {movieObj.director}</p>
        <p>Rating: {movieObj.rating}</p>
        <p>Genre: {movieObj.genre.join(', ')}</p> {/* Transforme le tableau en chaîne */}
        <p>Korean Title: {movieObj.koreanTitle}</p>
        {isBest && <strong>BEST</strong>}
      </div>
    </div>
  );
}