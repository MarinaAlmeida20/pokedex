import React from "react";

const CaughtPokemon = (props) => {
  console.log(props.date);
  return <p>Caught 0 Pokemon on {props.date}</p>;
};

export default CaughtPokemon;
