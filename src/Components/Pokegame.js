import React, { Component } from 'react';
import Styled from "styled-components";
import Pokecard from "./Pokecard";


class Pokegame extends Component {
	render(props) {
    let newOrder = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    let newArray = newOrder(this.props.poke)
    let handOne = newArray.slice(0,4)
    let handTwo = newArray.slice(4)
		return (
			<div className="">
      <h2>Pokegame</h2>
      <div>
      <h3>Hand One</h3>
        {handOne.map(element => {
          return <Pokecard
            id={element.id}
            key = {element.id}
            name= {element.name}
            type={element.type} base_experience={element.base_experience}
          />
        })}
      </div>
      <div>
      <h3>Hand Two</h3>
        {handTwo.map(element => {
          return <Pokecard
            id={element.id}
            key = {element.id}
            name= {element.name}
            type={element.type} base_experience={element.base_experience}
          />
        })}
      </div>
			</div>
		);
	}
}

export default Pokegame;
