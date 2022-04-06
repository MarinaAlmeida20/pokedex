import React, { useState } from "react";

const CaughtPokemon = ({ date }) => {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    // setCaught((c1) => c1 + 1);
    const ourPokemon = "Bulbasaur";
    const newArray = [...caught, ourPokemon];
    // const newArray = [...caught];
    // newArray.push(ourPokemon);
    setCaught(newArray);
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {date}{" "}
      </p>

      <button onClick={catchPokemon}>Catch Pokemon</button>

      <ul>
        {caught.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
