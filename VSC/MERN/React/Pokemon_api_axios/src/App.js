import React, {useState, createContext}from 'react';
import './App.css';
import Axios from 'axios'

export default function App() {
  const [pokemon, setPokemon] = useState([])

  const fetchPokemon =(e) => 
  {
      e.preventDefault();
      Axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => setPokemon(response.data.results))
  }

  return (
    <div className="text-light content">
      <button onClick={(e) => fetchPokemon(e)}>Get Pokemon</button>
      <div className='d-flex'>
      {/* <div>{JSON.stringify(pokemon)}</div> */}
      <ol>
      {pokemon.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)}
      </ol>
      </div>
    </div>
  )
}
