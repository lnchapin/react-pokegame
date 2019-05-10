import React from 'react';
import Pokedex from "./Components/Pokedex"
import Pokemon from "./Components/Pokemon"
import Pokecard from "./Components/Pokecard"
import Pokegame from "./Components/Pokegame"

function App() {
  console.log(Pokemon);
  return (
    <div>
      <Pokedex className="container-fluid">
        {Pokemon.map(element => {
          return <Pokecard
            id={element.id}
            key = {element.id}
            name= {element.name}
            type={element.type} base_experience={element.base_experience}
          />
        })}
      </Pokedex>
      <Pokegame poke={Pokemon} />
    </div>
  );
}

export default App;
