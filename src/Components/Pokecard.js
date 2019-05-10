import React, { Component } from 'react';
import Styled from "styled-components"

const PokeCard = Styled.div`
  background: white;
  border-radius: 10%;
  text-align: center;
  padding: 1%;
  margin: 3%;
  color: black;
`

class Pokecard extends Component {
	render(props) {
    let id = this.props.id.toString()
    let srcId = id.padStart(3, '0')
    //alternative let padToThree = number =>{number<=999? `00${number}`.slice(-3) : number} and then padToThree(this.props.id)
		return (
      <div className="col-3">
  			<PokeCard className="card" id={id}>
          <img className="card-img-top" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${srcId}.png`} alt={this.props.name}/>
          <h3>{this.props.name}</h3>
          <p>Type: {this.props.type}</p>
          <p>EXP: {this.props.base_experience}</p>
  			</PokeCard>
      </div>
		);
	}
}

export default Pokecard;
