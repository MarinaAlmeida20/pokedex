import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState(0);
  const [pokemonCaught, setPokemonCaught] = useState([]);

  function listOfPokemon() {
    setCaught((c1) => c1 + 1);
    setPokemonCaught(pokemonCaught.concat("Abomasnow"));
  }

  return (
    <div>
      <p>
        Caught {caught} Pokemon on {props.date}{" "}
      </p>
      <p>
        Pokemon Name: <button onClick={listOfPokemon}>Catch Pokemon</button>
      </p>

      {pokemonCaught.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default CaughtPokemon;
