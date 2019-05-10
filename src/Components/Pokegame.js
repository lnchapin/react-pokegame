import React, { Component } from 'react';
import Styled from "styled-components";
import Pokecard from "./Pokecard";

const Hand = Styled.div`
  text-align: center;
`


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
    let handScore = (arr) => {
      let score=0
      arr.forEach(element =>{
        score += element.base_experience
      })
      console.log(score);
      return score
    }

    let handTwo = newArray.slice(4)
		return (
			<div className="">
      <Hand>
      <h2>Pokegame</h2>
      </Hand>
      <Hand className="row">
      <h3 className="col-12">{handScore(handOne)>handScore(handTwo)? "Winning Hand": "Losing Hand"}</h3>
      <h3 className="col-12">{handScore(handOne)}</h3>
      </Hand>
        <div className="row">
        {handOne.map(element => {
          return <Pokecard
            id={element.id}
            key = {element.id}
            name= {element.name}
            type={element.type} base_experience={element.base_experience}
          />
        })}
        </div>

      <Hand className="row">
      <h3 className="col-12">{handScore(handOne)<handScore(handTwo)? "Winning Hand": "Losing Hand"}</h3>
      <h3 className="col-12">{handScore(handTwo)}</h3>
			</Hand>
      <div className="row">
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
