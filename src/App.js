import React from "react";

import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  function logWhenClicked() {
    console.log("Button was clicked!");
  }
  return (
    <header>
      <Logo appName="Marina" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </header>
  );
}

export default App;
