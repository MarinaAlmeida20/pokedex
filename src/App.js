import React from "react";

import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  const date = new Date().toLocaleDateString();

  function logWhenClicked() {
    console.log("Button was clicked!");
    return null;
  }

  return (
    <header>
      <Logo appName="Marina" handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </header>
  );
}

export default App;
