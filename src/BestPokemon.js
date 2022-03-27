import React from "react";

const BestPokemon = (props) => {
  // console.log(props);
  return (
    <div>
      <p>My favorite Pokemon is Pidgey.</p>
      <ul>
        {props.abilities.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
