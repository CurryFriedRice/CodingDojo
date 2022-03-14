import React, {useState, createContext}from 'react';
import './App.css';

export default function App() {
  const [pokemon, setPokemon] = useState([])

  const fetchPokemon =(e) => 
  {
      e.preventDefault();
      fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(data => data.json())
        .then(json => setPokemon([...json.results]))
  }

  return (
    <div className="text-light content">
      <button onClick={(e) => fetchPokemon(e)}>Get Pokemon</button>
      <ol>
      {pokemon.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)}
      </ol>
    </div>
  )
}
